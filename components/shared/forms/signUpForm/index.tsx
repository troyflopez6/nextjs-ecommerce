'use client'
import { Button } from '@/components/ui/button'
import { signUpDefaultValues } from '@/constants/SignUpDefaultValues'
import { signUpFormInputs } from '@/constants/signUpFormInputs'
import { signUpUser } from '@/lib/actions/user.actions'
import { TSignUpFormInputs } from '@/types/signUpFormInputs'
import Link from 'next/link'
import { FC, useActionState } from 'react'
import InputWithLabel from '../components/inputWithLabel'

type TSignUpFormProps = {
  callbackUrl?: string | string[]
}

const SignUpForm: FC<TSignUpFormProps> = ({ callbackUrl }) => {
  const [data, action, isPending] = useActionState(signUpUser, {
    success: false,
    message: '',
  })

  const getInputValue = (id: TSignUpFormInputs['id']): string | undefined => data?.formValues?.[id] ?? signUpDefaultValues?.[id]

  return (
    <form action={action}>
      <div className='flex flex-col gap-4'>
        {callbackUrl &&
          <input type='hidden' name='callbackUrl' value={callbackUrl} />
        }
        {
          signUpFormInputs.map(({ inputProps, label, labelProps, id, }, i) => (
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
                'Signing up...' :
                'Sign up'
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
          {'Already have an account? '}
          <Link
            href={'/sign-in'}
          >
            {'Sign in'}
          </Link>
        </div>
      </div>

    </form>
  )
}

export default SignUpForm