import jwt from 'jsonwebtoken';
export const verifyToken = async (req, res, next) => {
  // extract token from the front end where the token is stored after log in(local storage)
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    req.token = bearerToken; // attach token to request
    next();
  } else {
    res.sendStatus(403);
  }
};
