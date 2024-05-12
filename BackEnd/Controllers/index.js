import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';

export const indexPage = asyncHandler(async (req, res, next) => {
  res.json({
    username: 'hello',
    password: 'hello',
  });
});

export const signUpPage = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});
export const loginPage = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});
export const blogPage = asyncHandler(async (req, res, next) => {
  res.json({
    text: 'hello world',
  });
});
