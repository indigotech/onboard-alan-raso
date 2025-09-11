import Fastify from 'fastify';

export async function setupServer() {
  const app = Fastify();
  
  app.get('/hello', () => {
    return 'hello, world';
  });
  
  const port = +(process.env.PORT ?? '8080');
  await app.listen({ port })
  console.info(`Acessar http://localhost:${port}/hello`);

  return app;
}
