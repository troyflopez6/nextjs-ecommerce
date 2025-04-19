import { TInputWithLabelProps } from '@/components/shared/forms/components/inputWithLabel'
import { signInFormSchema } from '@/lib/validators/zodSignInForm'
import { z } from 'zod'

type TSignInFormInputs = TInputWithLabelProps & {id: keyof z.infer<typeof signInFormSchema>}

export const signInFormInputs: TSignInFormInputs[] = [
  {
    labelProps: {
      htmlFor: 'email'
    },
    inputProps: {
      id:'email',
      name:'email',
      type:'text',
      autoComplete:'email',
    },
    label: 'Email',
    id: 'email'
  },
  {
    labelProps: {
      htmlFor: 'password'
    },
    inputProps: {
      id:'password',
      name:'password',
      type:'password',
      autoComplete:'password',
    },
    label: 'Password',
    id:'password'
  }
]