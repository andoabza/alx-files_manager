import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient({
      host: 'redis-10391.c256.us-east-1-2.ec2.cloud.redislabs.com',
      port: 10391,
      password: 'pJwzUNNGws2xDdnggb6XNPonV1YITN6t',
    });

    this.client.on('error', (err) => {
      console.log(`Redis client not connected to the server: ${err}`);
    });
    this.client.connected = true;

  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (error, reply) => {
        if (error) {
          reject(error);
        } else {
          resolve(reply);
        }
      });
    });
  }

  async set(key, value, duration) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, 'EX', duration, (error, reply) => {
        if (error) {
          reject(error);
        } else {
          resolve(reply);
        }
      });
    });
  }

  async del(key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (error, reply) => {
        if (error) {
          reject(error);
        } else {
          resolve(reply);
        }
      });
    });
  }
  }
const redisClient = new RedisClient();
export default redisClient;
