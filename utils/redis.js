import { redis } from 'redis';

class RedisClient {
  constructor() {
    this.client = new redis.RedisClient({})
      .on('error', (err) => {
        console.log('Error ', err);
      })
      .connect();
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    const result = await this.client.get(key);
    return result;
  }

  async set(key, value, duration) {
    await this.client.set(key, value);
    await this.client.expire(key, duration);
  }

  async del(key) {
    await this.client.del(key);
  }
}
const redisClient = RedisClient();
export default redisClient;
