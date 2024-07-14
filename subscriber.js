const redis = require('redis');
const subscriber = redis.createClient({
  url: 'tu_redis_url',
  password: 'tu_redis_password'
});

subscriber.on('connect', () => {
  console.log('Conectado a Redis...');
  subscriber.subscribe('mi_canal');
});

subscriber.on('message', (channel, message) => {
  console.log(`Mensaje recibido en ${channel}: ${message}`);
});
