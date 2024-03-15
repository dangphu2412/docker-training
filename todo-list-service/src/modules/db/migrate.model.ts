import {model, Schema,} from "mongoose";

const MigrationModel = new Schema({
  version: {
    type: String,
    required: true
  },
})

export const MigrationDAO = model('migrations', MigrationModel)
