import mongoose, { Schema } from 'mongoose';
export const User = mongoose.model(
  'Users',
  new Schema({
    username: String,
    password: String,
  })
);
