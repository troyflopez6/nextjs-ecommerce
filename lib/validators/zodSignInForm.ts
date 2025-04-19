import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string()
    .nonempty({ message: 'Email is required' })
    .refine(
      (value) => value === '' || z.string().email().safeParse(value).success,
      { message: 'Invalid email address' }
    ),
  password: z.string().nonempty({ message: 'Password is required' }),
})