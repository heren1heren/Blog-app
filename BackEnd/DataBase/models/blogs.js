import mongoose, { Schema } from 'mongoose';
import Comment from './comments.js';
import { ObjectId } from 'mongodb';
import User from './users.js';
const BlogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true } || {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  type: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Schema.Types.Date, required: true },
  formatted_date: { type: Date },
  comments: [{ type: Schema.Types.ObjectId, ref: Comment }] || [],
  likes: [{ type: Schema.Types.ObjectId, ref: User }] || [],
});

BlogSchema.virtual('commentsCount').get(function () {
  const count = this.comments.length;
  return count;
});

BlogSchema.virtual('likesCount').get(function () {
  const count = this.likes.length;
  return count;
});
BlogSchema.virtual('url').get(function () {
  const url = '/blogs/' + this._id;
  return url;
});

const Blog = mongoose.model('Blogs', BlogSchema);
export default Blog;
