import { z } from 'zod'

export const signUpFormSchema = z.object({
  name: z.string().min(3, 'Name must be at at least 3 characters'),
  email: z.string()
    .nonempty({ message: 'Email is required' })
    .refine(
      (value) => value === '' || z.string().email().safeParse(value).success,
      { message: 'Invalid email address' }
    ),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password do not match',
  path: ['confirmPassword']
})