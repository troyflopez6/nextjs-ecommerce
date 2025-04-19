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
      session.user.role = token.role as string
      session.user.name = token.name
  
      // if there is an update, set the user name
      if(trigger === 'update') {
        session.user.name = user.name
      }

      return session
    },
    async jwt({ user, token }) {
      // Assign user fields to token

      if(user) {
        token.role = user.role

        // If user has no name then use the email
        if(user.name === 'NO_NAME') {
          token.name = user.email!.split('@')[0]
          await prisma.user.update({
            where: { id: user.id },
            data: {
              name: token.name
            }
          })
        }
      }
      
      return token
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)