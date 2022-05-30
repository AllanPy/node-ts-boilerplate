import redis, { RedisClientType} from 'redis';
import env from '../config/environment';

class RedisCacheSingleton {
  private static exists: RedisCacheSingleton;
  private static instance: RedisCacheSingleton;
  private client: RedisClientType;
  constructor() {
    if (RedisCacheSingleton.exists) {
      return RedisCacheSingleton.instance;
    }
    this.client = redis.createClient({
      url: env.REDIS_URL
    });
    this.client.on('error', (err) => console.log('Redis Client Error', err));
    this.client.connect().catch(err => console.log('Redis connection Error', err));
    RedisCacheSingleton.instance = this;
    RedisCacheSingleton.exists = this;
  }

  public async save(key: string, field: string, value: any) {
    const currentState = await this.fetch(key);
    if (!currentState) {
      return this.saveObject(key, { [field]: value });
    }
    currentState[field] = value;
    return await this.client.set(key, JSON.stringify(currentState));
  }

  public async fetch(key: string) {
    const result = await this.client.get(key);
    return result ? JSON.parse(result) : result;
  }

  public async saveObject(key: string, value: any) {
    const maxCacheAge = 300000;
    return await this.client.setEx(key, maxCacheAge, JSON.stringify(value));
  }

  public async delete(key: string) {
    return await this.client.del(key);
  }

  public async flush() {
    return await this.client.flushAll();
  }
}

export default RedisCacheSingleton;
