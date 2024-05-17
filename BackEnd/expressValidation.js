import { body } from 'express-validator';
const inputValidation = async (req, res, next) => {
  // blogs validation: 'title' 'description' 'blogData' 'type' // for admin app only
  // comments validation: 'description'
  // users validation: 'username' ; 'password'
  // mock input validation from express validation
  if (req.body.title) {
    body('title')
      .trim()
      .isLength({ min: 1 })
      .withMessage('title cannot be empty')
      .escape();
  }
  if (req.body.type) {
    body('type')
      .trim()
      .isLength({ min: 1 })
      .withMessage('type cannot be empty')
      .escape();
  }
  if (req.body.description) {
    body('description')
      .trim()
      .isLength({ min: 8 })
      .withMessage('blogData must be at least 8 characters')
      .escape();
  }

  if (req.body.username) {
    body('username')
      .trim()
      .isLength({ min: 1 })
      .withMessage('username cannot be empty')
      .escape();
  }
  if (req.body.description) {
    body('description')
      .trim()
      .isLength({ min: 8 })
      .withMessage('description must be longer than 8 characters')
      .escape();
  }
  if (req.body.password) {
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
