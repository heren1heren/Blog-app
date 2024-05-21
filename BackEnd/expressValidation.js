import { body } from 'express-validator';
const inputValidation = async (req, res, next) => {
  // blogs validation: 'title' 'description' 'blogData' 'type' // for admin app only
  // comments validation: 'description'
  // users validation: 'username' ; 'password'
  // mock input validation from express validation
  if (req.body.title || typeof reqBodyTitle === 'string') {
    body('title')
      .trim()
      .isLength({ min: 1 })
      .withMessage('title cannot be empty')
      .escape();
  }
  if (req.body.type || typeof reqBodyTitle === 'string') {
    body('type')
      .trim()
      .isLength({ min: 1 })
      .withMessage('type cannot be empty')
      .escape();
  }
  if (req.body.description || typeof reqBodyTitle === 'string') {
    body('description')
      .trim()
      .isLength({ min: 8 })
      .withMessage('blogData must be at least 8 characters')
      .escape();
  }

  if (req.body.username || typeof reqBodyTitle === 'string') {
    body('username')
      .trim()
      .isLength({ min: 3 })
      .withMessage('username cannot be empty')
      .escape();
  }
  if (req.body.description || typeof reqBodyTitle === 'string') {
    body('description')
      .trim()
      .isLength({ min: 8 })
      .withMessage('description must be longer than 8 characters')
      .escape();
  }
  if (req.body.password || typeof reqBodyTitle === 'string') {
    body('password')
      .trim()
      .isLength({ min: 1 })
      .withMessage('password cannot be empty')
      .escape();
  }

  //
  next();
};
export default inputValidation;
