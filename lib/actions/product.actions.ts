'use server'
import { prisma } from '@/db/prisma'
import { TProduct } from '@/types/product'
import { convertToPlainObject } from '../prisma/parsePrismaResponse'

type TGetLatestProducts = {
    numOfProducts?: number
}

// Get latest products
export const getLatestProducts = async ({ numOfProducts = 4 } : TGetLatestProducts): Promise<TProduct[]> => {

  const products = await prisma.product.findMany({
    take: numOfProducts,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return convertToPlainObject(products)
}

export const getProductBySlug = async ({ slug }: {slug: string}): Promise<TProduct | null> => {
  return await prisma.product.findFirst({
    where:{
      slug,
    }
  })
}