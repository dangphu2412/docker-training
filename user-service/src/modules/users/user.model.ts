import {model, Schema} from "mongoose";

const UserModel = new Schema({
  name: {
    type: String,
    required: true
  },
  subscriberCount: {
    type: Number,
    required: true,
    default: 0
  }
})

export const UserDAO = model('users', UserModel);
