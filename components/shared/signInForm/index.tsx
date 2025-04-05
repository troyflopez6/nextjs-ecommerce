'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInDefaultValues } from '@/constants/signInDefaultValues'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import Link from 'next/link'
import { FC, useActionState } from 'react'

type TSignInFormProps = {
  callbackUrl?: string | string[]
}

const SignInForm: FC<TSignInFormProps> = ({ callbackUrl }) => {
  const { email, password } = signInDefaultValues
  const [data, action, isPending] = useActionState(signInWithCredentials, {
    success: false,
    message:'',
  })

  return ( 
    <form action={action}>
      <div className='flex flex-col gap-5'>
        {callbackUrl &&
          <input type='hidden' name='callbackUrl' value={callbackUrl} />
        }
        <div className='grid gap-2'>
          <Label
            htmlFor='email'
          >
            {'Email'}
          </Label>
          <Input
            id='email'
            name='email'
            type='email'
            required={true}
            autoComplete='email'
            defaultValue={email}
          />
        </div>
        <div className='grid gap-2'>
          <Label
            htmlFor='password'
          >
            {'Password'}
          </Label>
          <Input
            id='password'
            name='password'
            type='password'
            required={true}
            autoComplete='password'
            defaultValue={password}
          />
        </div>
        <div>
          <Button
            className='w-full'
            disabled={isPending}
          >
            {
              isPending ? 
                'Signing in...' :
                'Sign in'
            }
          </Button>
        </div>
        {
          data && !data.success && data.message && (
            <div className='text-center text-destructive'>
              {data.message}
            </div>
          )
        }
        <div className="text-sm text-center text-muted-foreground">
          {'Don\'t have an account? '}
          <Link
            href={'/sign-up'}
          >
            {'Sign up'}
          </Link>
        </div>
      </div>
            
    </form>
  )
}
 
export default SignInForm