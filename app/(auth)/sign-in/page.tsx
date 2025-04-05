import SignInForm from '@/components/shared/signInForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_NAME } from '@/constants/appConfig'
import { Params } from '@/types/params'
import { SearchParams } from '@/types/searchParams'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4 p-6'>
          <Link href='/' className='flex-center'>
            <Image 
              src='/images/logo.svg'
              width={100}
              height={100}
              alt={`${APP_NAME}_logo`}
              priority={true}
            />
          </Link>
          <CardTitle className='text-center'>{'Sign in'}</CardTitle>
          <CardDescription className='text-center'>
            {'Sign in to your account'}
          </CardDescription>
        </CardHeader>
        <CardContent className='p-6 pt-0'>
          <SignInForm
            callbackUrl={callbackUrl}
          />
        </CardContent>
      </Card>
    </div>
  )
}
 
export default SignInPage