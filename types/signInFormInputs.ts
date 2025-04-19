import { TInputWithLabelProps } from '@/components/shared/forms/components/inputWithLabel'
import { signInFormSchema } from '@/lib/validators/zodSignInForm'
import { z } from 'zod'

export type TSignInFormInputs = TInputWithLabelProps & {id: keyof z.infer<typeof signInFormSchema>}
