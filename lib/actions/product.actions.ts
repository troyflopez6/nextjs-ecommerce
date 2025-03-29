'use server'

import { TProduct } from '@/types/product'
import { PrismaClient } from '@prisma/client'
import { convertToPlainObject } from '../prisma/parsePrismaResponse'

type TGetLatestProducts = {
    numOfProducts?: number
}

// Get latest products
export const getLatestProducts = async ({ numOfProducts = 4 } : TGetLatestProducts): Promise<TProduct[]> => {
  const prisma = new PrismaClient()

  const products = await prisma.product.findMany({
    take: numOfProducts,
    orderBy: {
      createdAt: 'desc'
    }
  })

  const updatedProducts = products.map((product) => ({
    ...product,
    price: String(product.price.toNumber()),
    rating: product.rating.toNumber()
  }))

  return convertToPlainObject(updatedProducts)
}