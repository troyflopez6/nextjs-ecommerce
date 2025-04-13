import AuthenticationFormContainer from '@/components/shared/forms/components/authenticationFormContainer'
import SignUpForm from '@/components/shared/forms/signUpForm'
import { Params } from '@/types/params'
import { SearchParams } from '@/types/searchParams'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'Sign up',
}

type TSignUpPageProps = {
  params: Params
  searchParams: SearchParams
}

const SignUpPage:FC<TSignUpPageProps> = async ({ searchParams }) => {
  const serverSearchParams = await searchParams
  const callbackUrl = serverSearchParams?.['callbackUrl']
  return (
    <AuthenticationFormContainer
      title='Create an account'
    >
      <SignUpForm
        callbackUrl={callbackUrl}
      />
    </AuthenticationFormContainer>
  )
}
 
export default SignUpPage