'use client'

import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/constants/appConfig'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {

  return ( 
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image 
        src='/images/logo.svg' 
        width={48}
        height={48}
        alt={`${APP_NAME}`}
        priority={true}
      />
      <div className='p-6 w-1/3 roudned-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold mb-4'>
            Not found
        </h1>
        <p className='text-destructive'>
            Could not find requested page
        </p>
        <Button
          variant='outline'
          asChild
        >
          <Link 
            href={'/'}
            className='mt-4 ml-2'
          >
                Back to Home page
          </Link>
        </Button>
      </div>
    </div>
  )
}
 
export default NotFoundPage