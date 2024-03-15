import {Express} from "express";
import {UserDAO} from "./user.model";

export function registerUserModule(app: Express) {
  app.get('/', async (req, res) => {
    const users = await UserDAO.find({});

    return res.status(200).json({
      data: users
    })
  });

  app.get('/:id', async (req, res) => {
    const user = await UserDAO.findById(req.params.id);

    return res.status(200).json({
      data: user
    })
  })
}
