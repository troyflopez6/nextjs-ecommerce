import { PRODUCTS_MOCK } from '@/constants/mock/products'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const main = async () => {
    
  await prisma.product.deleteMany()
  await prisma.product.createMany({
    data:PRODUCTS_MOCK.products
  })

  console.log('Database seeded successfuly')
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error({ e })
    await prisma.$disconnect()
    process.exit(1)
  })