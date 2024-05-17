import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import User from '../DataBase/models/users.js';
import Comment from '../DataBase/models/comments.js';
import Blog from '../DataBase/models/blogs.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import inputValidation from '../expressValidation.js';

export const verifyToken = async (req, res, next) => {
  // extract token from the front end where the token is stored after log in(local storage)
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    // console.log(bearer);
    const bearerToken = bearer[1];
    // console.log(bearerToken);
    req.token = bearerToken; // attach token to request
    next();
  } else {
    console.log('verifytoken error');
    res.sendStatus(403);
  }
};

//*Get

export const indexGet = [
  verifyToken,

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
  console.log(blogs);
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
  implementing  sign up post -> implementing authentication with login and sign up post

 */
export const loginPost = asyncHandler(
  async (req, res, next) => {
    // const { username, password } = req.body;
    const user = {
      username: 'heren',
      password: 'aoeuaoeu',
    };
    // if (user.username) {
    // const match = await bcrypt.compare(req.body.password, user.password);

    // if (!match) {
    //   return res
    //     .status(401)
    //     .json({ message: 'incorrect user or password inside match' });
    // }
    const token = jwt.sign({ user }, 'secret', async (err, token) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({ token });
    });
  }
  // }
);
export const logoutPost = asyncHandler(async (req, res, next) => {
  // delete jwt token inside client localstorage
  res.json({
    text: 'hello world',
  });
});
export const signUpPost = [
  inputValidation,
  asyncHandler(async (req, res, next) => {
    // after validation

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }

      const user = User.create({
        username: 'heren',
        password: hashedPassword, // should be done by bcrypt
      });

      res.json({
        text: 'hello world',
        userUrl: user.url, // to create a link tag with Path to: userUrl
        user,
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
