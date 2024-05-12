import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import User from '../DataBase/models/users.js';
import Comment from '../DataBase/models/comments.js';
import Blog from '../DataBase/models/blogs.js';

//*Get

export const indexGet = asyncHandler(async (req, res, next) => {
  res.json({
    username: 'hello',
    password: 'hello',
  });
});

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
  res.json({
    text: 'hello world',
  });
});
export const blogDetailGet = asyncHandler(async (req, res, next) => {
  //todo implementing handling id routes
  res.json({
    text: 'hello world',
  });
});

// export const commentGet?
//*Post

/*
 todo: handing all post-delete-update and authentication logics
 *plan:
       implementing handling id routes  
        ->       implementing  sign up post -> implementing authentication with login and sign up post

 */
export const loginPost = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});
export const logoutPost = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});
export const signUpPost = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});

export const commentPost = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});

//*Delete

export const commentDel = asyncHandler(async (req, res, next) => {
  //todo implementing handling id routes
  res.json({
    text: 'hello world',
  });
});

export const userDel = asyncHandler(async (req, res, next) => {
  //todo implementing handling id routes
  res.json({
    text: 'hello world',
  });
});

//*Update

export const commentUp = asyncHandler(async (req, res, next) => {
  //todo implementing handling id routes
  res.json({
    text: 'hello world',
  });
});

export const userUp = asyncHandler(async (req, res, next) => {
  //todo implementing handling id routes
  res.json({
    text: 'hello world',
  });
});
