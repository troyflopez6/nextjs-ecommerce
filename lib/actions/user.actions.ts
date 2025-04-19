 
'use server'
import { signIn, signOut } from '@/auth'
import { prisma } from '@/db/prisma'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { hashSync } from 'bcrypt-ts-edge'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { signInFormSchema } from '../validators/zodSignInForm'
import { signUpFormSchema } from '../validators/zodSignUpForm'

// Sign in user with credentials
export const signInWithCredentials = async(prevState: unknown, formData: FormData) => {

  const formValues = {
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
  }

  try {
    const callbackUrl = formData.get('callbackUrl')?.toString()
    const { success, data: user, error } = signInFormSchema.safeParse(formValues)

    if(!success) {
      return {
        formValues,
        success: false,
        errors: error.flatten().fieldErrors
      }
    }

    await signIn('credentials', {
      ...user,
      redirectTo: callbackUrl ? `/${callbackUrl}` : '/'
    },)

  } catch (error) {
    if(isRedirectError(error)){
      throw error
    }

    return {
      formValues,
      success: false,
      message: 'Invalid email or password',
    }
  }
}

export const signOutUser = async() => await signOut()

export const signUpUser = async (prevState: unknown, formData: FormData) => {
  const formValues = {
    name: formData.get('name')?.toString(),
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
    confirmPassword: formData.get('confirmPassword')?.toString()
  }

  try {
    const { success, data: user, error } = signUpFormSchema.safeParse(formValues)
    if(!success){
      
      return {
        formValues,
        success: false,
        errors: error.flatten().fieldErrors
      }
    }

    const plainPassword = user.password
    user.password = hashSync(user.password, 10)
  
    const { name, password, email } = user
  
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    })
  
    await signIn('credentials', {
      email,
      password: plainPassword,
    })
  
    return {
      success: true,
      message: 'user registered successfully'
    }
   
  } catch (error) {
    if(isRedirectError(error)){
      throw error
    }

    if(error instanceof PrismaClientKnownRequestError && error.code === 'P2002'){
      return {
        success: false,
        message: 'The email you\'re trying to register has already been taken.',
        formValues,
        error,
      }
    }
    return {
      success: false,
      message: 'An error occured while registering. Please try again later.',
      formValues,
      error
    }
  }
}
