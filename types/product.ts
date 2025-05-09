import { productSchema } from '@/lib/validators/zodProduct'
import { z } from 'zod'

export type TProduct = z.infer<typeof productSchema> & {
    id: string;
    name: string;
    rating: string;
    createdAt: Date;
}