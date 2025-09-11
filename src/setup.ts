import { setupDatabase } from './setup-database.js';
import { setupServer } from './setup-server.js';

export async function setup() {
  console.info('Setup database...');
  await setupDatabase();
  console.info('Database connected!');

  console.info('Setup server...');
  return setupServer();
}
