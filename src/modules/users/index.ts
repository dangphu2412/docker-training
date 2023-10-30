import {Express, Router} from "express";
import {UserDAO} from "./user.model";

export function registerUserModule(app: Express) {
  const router = Router();

  router.get('/', async (req, res) => {
    const users = await UserDAO.find();

    return res.status(200).json({
      data: users
    })
  })

  return app.use('/users', router);
}
