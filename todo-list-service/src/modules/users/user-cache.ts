import {cacheStore} from "../cache/cache";

class UserCache {
  private PRIMARY_CACHE_KEY = 'users';

  async find() {
    const users = await cacheStore.get(this.PRIMARY_CACHE_KEY);

    if (!users) {
      return null;
    }

    console.log('Found cached')
    return JSON.parse(users);
  }

  async cache(users: any[]) {
    try {
      console.log('Caching')

      return await cacheStore.set(this.PRIMARY_CACHE_KEY, JSON.stringify(users));
    } catch (e) {
      console.log('Errr', e);
    }
  }
}

export const userCache = new UserCache();
