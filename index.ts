import fastify from 'fastify'

const { setTimeout } = require('timers/promises')
const delay = setTimeout

const server = fastify()

server.get('/', async (request, reply) => {
    return reply.code(200).send('Hi');
  });

server.get('/fast', async (request, reply) => {
  return reply.code(200).send('Flash....');
});

server.get('/slow', async (request, reply) => {
    await delay(5000);
    return reply.code(200).send('...despacito');
  });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});