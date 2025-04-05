// Scheme for inserting products

import { z } from 'zod'
import { formatPriceWithDecimal } from '../utils/price'

export const currency = z
  .string()
  .refine((value) => /^\d+(\.\d{2})?$/.test(formatPriceWithDecimal(Number(value))), 'Price must have exactly two decimal places')

export const productSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(3, 'Category must be at least 3 characters'),
  brand: z.string().min(3, 'Brand must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  isFeatured: z.boolean(),
  banner: z.string().nullable().optional(),
  price: currency,
  numReviews: z.coerce.number().default(0),
})