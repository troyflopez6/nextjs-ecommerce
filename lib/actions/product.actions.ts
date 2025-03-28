'use server'

import { PrismaClient } from '@prisma/client'
import { convertToPlainObject } from '../prisma/parsePrismaResponse'

type TGetLatestProducts = {
    numOfProducts?: number
}

// Get latest products
export const getLatestProducts = async ({ numOfProducts = 4 } : TGetLatestProducts) => {
  const prisma = new PrismaClient()

  const products = await prisma.product.findMany({
    take: numOfProducts,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return  convertToPlainObject(products)
}