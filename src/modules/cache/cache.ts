import { createClient } from 'redis';

interface Cache {
  set: (key: string, value: string) => Promise<void>;
  get: (key: string) => Promise<string | null>;
}

class RedisStore implements Cache {
  private store = createClient({
    url: 'redis://localhost:6379',
  })

  async connect(): Promise<void> {
    await this.store.on('error', err => console.log('Redis Client Error', err)).connect();
  }

  async set(key: string, value: any): Promise<void> {
     await this.store.set(key, value);
  }

  get(key: string) {
    return this.store.get(key)
  }
}

export const cacheStore = new RedisStore();
export async function registerCache() {
  await cacheStore.connect();
  console.log('Cache registered')
}
