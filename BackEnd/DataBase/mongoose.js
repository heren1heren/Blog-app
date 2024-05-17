import mongoose, { Schema } from 'mongoose';
import 'dotenv/config';
import Blog from './models/blogs.js';
import User from './models/users.js';

const uri = process.env.mongoDB;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(uri);
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

//todo: testing if the models are working fine
// const user = await User.create({
//   username: 'heren',
//   password: 'oaeus;,,.;phnaoeu',
// });
// await Blog.create({
//   title: 'sample with like count',
//   author: 'userIdHere',
//   type: 'greeting',
//   description: ' this is a sample for blog model',
//   date: new Date(),
//   formatted_date: new Date(),
//   likes: [user.id],
// });

/**const BlogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Schema.Types.Date, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] || [],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }] || [],
});
 */
