import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_NAME } from '@/constants/appConfig'
import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

type TAuthenticationFormContainerProps = {
    title?: string
    description?: string
} & PropsWithChildren

const AuthenticationFormContainer: FC<TAuthenticationFormContainerProps> = ({ children, title, description }) => {
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
          {title && 
            <CardTitle className='text-center'>{title}</CardTitle>
          }
          {description &&
            <CardDescription className='text-center'>
              {description}
            </CardDescription>
          }
        </CardHeader>
        <CardContent className='p-6 pt-0'>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}
 
export default AuthenticationFormContainer