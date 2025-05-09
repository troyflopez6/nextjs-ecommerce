import AuthenticationFormContainer from '@/components/shared/forms/components/authenticationFormContainer'
import SignInForm from '@/components/shared/forms/signInForm'
import { Params } from '@/types/params'
import { SearchParams } from '@/types/searchParams'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'Sign in',
}

type TSignInPageProps = {
  params: Params
  searchParams: SearchParams
}

const SignInPage:FC<TSignInPageProps> = async ({ searchParams }) => {
  const serverSearchParams = await searchParams
  const callbackUrl = serverSearchParams?.['callbackUrl']
  return (
    <AuthenticationFormContainer
      title='Sign in'
      description='Sign in to your account'
    >
      <SignInForm
        callbackUrl={callbackUrl}
      />
    </AuthenticationFormContainer>

  )
}
 
export default SignInPage