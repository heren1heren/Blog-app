import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import User from '../DataBase/models/users.js';
import Comment from '../DataBase/models/comments.js';
import Blog from '../DataBase/models/blogs.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import inputValidation from '../expressValidation.js';

//*Get

export const indexGet = [
  asyncHandler(async (req, res, next) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
      console.log('access');
      console.log(req.token);
      if (err) {
        console.log(err);
        res.sendStatus(403);
      } else {
        res.json({
          message: 'post created',
          authData,
        });
      }
    });
  }),
];

export const signUpGet = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});
export const loginGet = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});

export const blogGet = asyncHandler(async (req, res, next) => {
  // send json data that has been fetched from mongodb
  const blogs = await Blog.find(
    {},
    {
      author: 1,
      title: 1,
      comments: 1,
      likes: 1,
      likesCount: 1,
      description: 1,
      date: 1,
    }
  )
    .populate('comments')
    .exec();
  res.json({
    blogs,
  });
});

export const blogDetailGet = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const data = await Blog.findById(id).populate('comments').exec();

  res.json({
    author: data.author,
    title: data.title,
    description: data.description,
    type: data.type,
    id,
    url: '/blogs/' + id,
    comments: data.comments,
    likesCount: data.likes.length,
    commentsCount: data.comments.length,
    date: data.date,
  });
});

//*Post

/*
 todo:  authentication logics


 */
export const loginPost = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      console.log(errors);
      res.json({ errors });
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();
    if (!user.username) {
      res.status(401).json({ message: 'incorrect user or password' });
      return;
    }
    if (user.username) {
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res
          .status(401)
          .json({ message: 'incorrect user or password inside match' });
      }
      const token = jwt.sign(
        { user },
        'secret',
        { expiresIn: '10h' },
        async (err, token) => {
          if (err) {
            console.log(err);
            return;
          }
          res.json({ token, message: 'successful' });
        }
      );
    }
  }),
];
export const logoutPost = asyncHandler(async (req, res, next) => {
  res.json({
    token: '',
  });
});
export const signUpPost = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    // after validation
    // looking for username existed
    const errors = validationResult(req);
    const existedUser = await User.findOne({
      username: req.body.username,
    }).exec();
    if (!errors.isEmpty) {
      console.log(errors);
      res.json({ errors });
    }
    if (existedUser) {
      console.log('username is existed');
      res.json({
        message: 'username is existed',
      });
      return;
    }
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }

      await User.create({
        username: req.body.username,
        password: hashedPassword, // should be done by bcrypt
      });

      res.json({
        message: 'successful',
      });
    });
  }),
];

export const blogPost = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      res.json({ message: 'error post' });
      return;
    }
    // post to mongodb
    // mock user, later will use user object mongodb from log in id;
    const inputData = {
      type: req.body.type,
      author: 'mock user',
      title: req.body.title,
      description: req.body.description,

      date: new Date(),
    };
    const blog = await Blog.create(inputData);
    console.log(blog);
    res.json({ message: 'successful post' });
  }),
];
export const commentPost = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      res.json({ message: 'error post' });
      return;
    }
    // post to mongodb
    // mock user, later will use user object mongodb from log in id;
    const inputData = {
      author: '66401f882fe87a7ec785f6f7',
      description: req.body.description,
      date: new Date(),
      blog: req.params.id,
    };
    const comment = await Comment.create(inputData);
    // put comment inside a blog model instance
    const currentBlog = await Blog.findById(req.params.id);
    currentBlog.comments.push(comment);
    currentBlog.save();
    res.json({ message: 'successful post comment' });
  }),
];

//*Delete

export const commentDel = asyncHandler(async (req, res, next) => {
  //  implementing handling id routes
  res.json({
    text: 'hello world',
  });
});

export const userDel = asyncHandler(async (req, res, next) => {
  // implementing handling id routes
  // assuming that the user is passed the authentication
  /**
   * get user.url only when we need to interact with front end
   */
  const id = req.params.id; // from a front-end  <a> link
  const mockId = 123;

  await User.findByIdAndDelete(mockId);
  res.json({
    text: 'hello world',
  });
});

//*Update

export const commentUp = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    //  implementing handling id routes
    res.json({
      text: 'hello world',
    });
  }),
];
export const BlogUp = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    //  implementing handling id routes
    res.json({
      text: 'hello world',
    });
  }),
];

export const userUp = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    //  implementing handling id routes
    res.json({
      text: 'hello world',
    });
  }),
];
