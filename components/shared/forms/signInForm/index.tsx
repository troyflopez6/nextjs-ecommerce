'use client'
import { Button } from '@/components/ui/button'
import { signInDefaultValues } from '@/constants/signInDefaultValues'
import { signInFormInputs } from '@/constants/signInFormInputs'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { TSignInFormInputs } from '@/types/signInFormInputs'
import Link from 'next/link'
import { FC, useActionState } from 'react'
import InputWithLabel from '../components/inputWithLabel'

type TSignInFormProps = {
  callbackUrl?: string | string[]
}

const SignInForm: FC<TSignInFormProps> = ({ callbackUrl }) => {
  const [data, action, isPending] = useActionState(signInWithCredentials, {
    formValues: signInDefaultValues,
    success: false,
    message: '',
  })

  const getInputValue = (id: TSignInFormInputs['id']): string | undefined  => data?.formValues?.[id] ?? signInDefaultValues?.[id] 

  return ( 
    <form action={action}>
      <div className='flex flex-col gap-5'>
        {callbackUrl &&
          <input type='hidden' name='callbackUrl' value={callbackUrl} />
        }
        {
          signInFormInputs.map(({ inputProps, label, labelProps, id, }, i) => (
            <InputWithLabel
              key={i}
              inputProps={{
                ...inputProps,
                defaultValue: getInputValue(id)
              }}
              labelProps={labelProps}
              label={label}
              error={data?.errors?.[id]}
            />
          ))
        }
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