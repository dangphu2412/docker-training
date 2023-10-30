import {Express, Router} from "express";
import {UserDAO} from "./user.model";
import {userCache} from "./user-cache";

export function registerUserModule(app: Express) {
  const router = Router();

  router.get('/', async (req, res) => {
    const cachedUsers = await userCache.find();

    if (cachedUsers) {
      console.log('cachedUsers', cachedUsers)
      return res.json({
        data: cachedUsers
      });
    }

    const users = await UserDAO.find();
    await userCache.cache(users);

    return res.status(200).json({
      data: users
    })
  })

  return app.use('/users', router);
}
