import { PrismaClient } from '@prisma/client';

const prismaFactory = () => {
  const prisma = new PrismaClient();

  // This one errors.
  // return prisma;

  // This one doesn't.
  return extendPrisma(prisma);
};

function extendPrisma(prisma: PrismaClient) {
  return prisma.$extends({});
}

type PrismaService = ReturnType<typeof prismaFactory>;

const prisma: PrismaService = 1 as any;

prisma.orders.create({
  data: {
    // Should error.
    meta: 5,
  },
});