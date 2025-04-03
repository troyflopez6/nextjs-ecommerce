'use server'
import { extendedPrisma } from '@/db/prisma'
import { TProduct } from '@/types/product'
import { convertToPlainObject } from '../prisma/parsePrismaResponse'

type TGetLatestProducts = {
    numOfProducts?: number
}

// Get latest products
export const getLatestProducts = async ({ numOfProducts = 4 } : TGetLatestProducts): Promise<TProduct[]> => {

  const products = await extendedPrisma.product.findMany({
    take: numOfProducts,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return convertToPlainObject(products)
}

export const getProductBySlug = async ({ slug }: {slug: string}): Promise<TProduct | null> => {
  return await extendedPrisma.product.findFirst({
    where:{
      slug,
    }
  })
}