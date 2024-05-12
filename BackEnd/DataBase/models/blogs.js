import mongoose, { Schema } from 'mongoose';
import { Comment } from './comments';
import { ObjectId } from 'mongodb';
import { User } from './users';
const BlogSchema = new Schema({
  author: String,
  type: String,
  description: String,
  date: Schema.Types.Date,
  blogData: String,
  comments: [{ type: Schema.Types.ObjectId, ref: Comment }], // it should be an array that stores comments reference
  likes: [{ type: Schema.Types.ObjectId, ref: User }],
});

BlogSchema.virtual('commentsCount').get(function () {
  // calculate number of comment here
  const count = this.comments.reduce((accumulator) => {
    const value = 1; // depend on type of current data
    return accumulator + value;
  }, 0);
  return count;
});
BlogSchema.virtual('likesCount').get(function () {
  // calculate number of comment here
  const count = this.likes.reduce((accumulator) => {
    const value = 1; // depend on type of current data
    return accumulator + value;
  }, 0);
  return count;
});

export const Blog = mongoose.model('Blogs', BlogSchema);
