import {Express} from "express";
import {UserDAO} from "./user.model";
import {producer} from "../kafka";

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

  app.post('/', async (req, res) => {
    console.log(req.body)
    const user = await UserDAO.create(req.body);

    await producer.send({
      topic: 'SEND_NOTIFICATION',
      messages: [
        { key: user._id.toHexString(), value: JSON.stringify(user) }
      ]
    })

    return res.status(201).json({
      data: user
    })
  })

  app.patch('/:id', async (req, res) => {
    const user = await UserDAO.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    user.subscriberCount += 1;
    await user.save();
    return res.status(200).json({
      data: user
    });
  });
}
