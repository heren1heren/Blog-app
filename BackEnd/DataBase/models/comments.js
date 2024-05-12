import mongoose, { Schema } from 'mongoose';
import { User } from './users';
const CommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: User }, // take from user reference
  description: String,
  date: Schema.Types.Date,
  likes: [{ type: Schema.Types.ObjectId }], // storing userRef here I think
});

CommentSchema.virtual('likesCount').get(function () {
  const count = this.likes.reduce((accumulator) => {
    const value = 1; // depend on type of current data
    return accumulator + value;
  }, 0);
  return count;
});

export const Comment = mongoose.model('Comments', CommentSchema);
