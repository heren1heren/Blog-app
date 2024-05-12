import passport from 'passport';
import jwtStrategy from './strategies.js';
passport.use(jwtStrategy);
