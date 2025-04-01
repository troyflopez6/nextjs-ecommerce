import { PRODUCTS_MOCK } from '@/constants/mock/products'
import { USERS_MOCK } from '@/constants/mock/users'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const main = async () => {
    
  await prisma.product.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.verificationToken.deleteMany()
  await prisma.user.deleteMany()
  await prisma.product.deleteMany()

  await prisma.product.createMany({
    data: PRODUCTS_MOCK
  })

  await prisma.user.createMany({
    data: USERS_MOCK
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