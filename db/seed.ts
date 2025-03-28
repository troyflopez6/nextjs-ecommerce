import { PRODUCTS_MOCK } from '@/constants/mock/products'
import { PrismaClient } from '@prisma/client'

const main = async () => {
    
  const prisma = new PrismaClient()
  await prisma.product.deleteMany()
  await prisma.product.createMany({
    data:PRODUCTS_MOCK.products
  })

  console.log('Database seeded successfuly')
}

main()