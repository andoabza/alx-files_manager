// import { RedisClient } from 'redis';

const redis = require('redis');

// class RedisClient {
//   constructor() {
//     this.client = new redis.RedisClient({}).
//       on('error', (err) => {
//         console.log('Error ' + err);
//       })
//       .connect();
//   }

//   isAlive() {
//     return this.client.connected;
//   }

//   async get(key) {
//     return await this.client.get(key);
//   }

//   async set(key, value, duration) {
//     await this.client.set(key, value);
//     await this.client.expire(key, duration);
//   }

//   async del(key) {
//     await this.client.del(key);
//   }
// }
// const redisClient = RedisClient();
// export default redisClient;
export const client = new redis.RedisClient({
  password: 'pJwzUNNGws2xDdnggb6XNPonV1YITN6t',
  socket: {
    host: 'redis-10391.c256.us-east-1-2.ec2.cloud.redislabs.com',
    port: 10391,
  },
}).on('error', (err) => {
  console.log('Error ', err);
});
client.connect();
export default client;
