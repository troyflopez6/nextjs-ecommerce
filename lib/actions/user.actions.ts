'use server'

import { signIn, signOut } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { signInFormSchema } from '../validators/zodSignInForm'

// Sign in user with credentials
export const signInWithCredentials = async(prevState: unknown, formData: FormData) => {
  try {
    const callbackUrl = formData.get('callbackUrl')?.toString()
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password')
    })

    await signIn('credentials', {
      ...user,
      redirectTo: callbackUrl ? `/${callbackUrl}` : '/'
    },)

  } catch (error) {
    if(isRedirectError(error)){
      throw error
    }

    return {
      success: false,
      message: 'Invalid email or password',
    }
  }
}

export const signOutUser = async() => await signOut()