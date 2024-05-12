import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import 'dotenv/config';
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // passing function into opts object
opts.secretOrKey = process.env.PrivateKey; //normally store this in process.env.secret

const strategy = new JwtStrategy(opts, (jwt_payload, done) => {
  // await User...
  console.log(jwt_payload);
  if (jwt_payload.username === user.username) {
    return done(null, true);
  }
  return done(null, false);
});
export default strategy;
