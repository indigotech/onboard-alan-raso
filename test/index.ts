import { setup } from '../src/setup.js';
import { prisma } from '../src/setup-database.js';
import type { FastifyInstance } from 'fastify';

let app: FastifyInstance;

before(async () => {
  app = await setup();
});

import './hello-test.js';
import './post-users.js';

after(async () => {
  await prisma.$disconnect();
  await app.close();
});
