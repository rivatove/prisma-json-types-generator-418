import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = 1 as any;

prisma.user.create({
  data:  {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          published: true,
          // Should error.
          meta: 5,
        },
      ],
    },
  }
})