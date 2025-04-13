import { cartItemSchema, insertCartSchema } from '@/lib/validators/zodCart'
import { z } from 'zod'

export type TCart = z.infer<typeof insertCartSchema>

export type TCartItem = z.infer<typeof cartItemSchema>