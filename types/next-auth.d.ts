import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface User extends DefaultUser {
    role: string;
    // Add other custom fields here
  }

  interface Session extends DefaultSession {
    user: {
      role: string;
      // Other user fields
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
    // Add other JWT custom fields here
  }
}