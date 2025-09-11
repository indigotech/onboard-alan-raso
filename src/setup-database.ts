import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient;

export async function setupDatabase() {
  prisma = new PrismaClient({ datasourceUrl: process.env.DATABASE_URL ?? '' });
  await prisma.$connect();
}
