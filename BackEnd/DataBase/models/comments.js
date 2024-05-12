import mongoose, { Schema } from 'mongoose';
import User from './users.js';
const CommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // 'User' should be a string representing the model name
  description: { type: String, required: true },
  date: { type: Schema.Types.Date, required: true },
  likes: [{ type: Schema.Types.ObjectId }] || [],
});
CommentSchema.virtual('likesCount').get(function () {
  const count = this.likes.length;
  return count;
});
CommentSchema.virtual('url').get(function () {
  const url = '/comments/' + this._id;
  return url;
});
const Comment = mongoose.model('Comments', CommentSchema);
export default Comment;
