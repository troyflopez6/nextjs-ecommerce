import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { compareSync } from 'bcrypt-ts-edge'
import NextAuth, { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './db/prisma'

export const config: NextAuthConfig  = {
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials, request) {
        if(credentials === null) return null

        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        })

        // Check if user exists and if the password matches
        if(user && user.password) {
          const isMatch = compareSync(credentials.password as string, user.password)

          // If password is correct, return user
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role
            }
          }
        }
        return null
      },
    })
  ],
  callbacks: {
    async session({ session, trigger, user, token }) {
      // Set the user ID from the token
      session.user.id = token.sub || ''

      // if there is an update, set the user name
      if(trigger === 'update') {
        session.user.name = user.name
      }

      return session
    },
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)