import {model, Schema} from "mongoose";

const UserModel = new Schema({
  name: {
    type: String,
    required: true
  },
})

export const UserDAO = model('users', UserModel);
