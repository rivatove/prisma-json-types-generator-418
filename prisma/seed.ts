import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = 1 as any;

async () => {
  const aggregates = await prisma.orders.groupBy({
    by: ['meta'],
    _count: true,
  });

  for (const aggregate of aggregates) {
    // The type of data is JsonValue, not the expected SampleJson
    const data = aggregate.meta
  }
}