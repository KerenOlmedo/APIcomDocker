import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function findHistoric() {
  return await prisma.historic.findMany()
}

export async function createHistoric(cep: string) {
  return await prisma.historic.create({data:{ cep }})
}

findHistoric()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })