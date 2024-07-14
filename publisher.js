const redis = require('redis');
const publisher = redis.createClient({
  url: 'tu_redis_url',
  password: 'tu_redis_password'
});

publisher.on('connect', () => {
  console.log('Conectado a Redis...');
  setInterval(() => {
    const message = `Mensaje enviado a las ${new Date().toISOString()}`;
    publisher.publish('mi_canal', message);
    console.log(`Mensaje publicado: ${message}`);
  }, 5000); // Publica un mensaje cada 5 segundos
});
