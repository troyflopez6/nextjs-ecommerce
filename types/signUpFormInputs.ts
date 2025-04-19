import { TInputWithLabelProps } from '@/components/shared/forms/components/inputWithLabel'
import { signUpFormSchema } from '@/lib/validators/zodSignUpForm'
import { z } from 'zod'

export type TSignUpFormInputs = TInputWithLabelProps & {id: keyof z.infer<typeof signUpFormSchema>}
