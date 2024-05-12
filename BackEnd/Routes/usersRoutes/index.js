import { Router } from 'express';
import * as controller from '../../Controllers/index.js';
const router = Router();
const authentication = async (req, res, next) => {
  // mock passport authenticating handlers that passes only if user is sign in
  next();
};
const AdminAuthentication = async (req, res, next) => {
  // mock passport authenticating handlers that passes only if user is sign in
  next();
};
//*GET
router.get('/', controller.indexGet);

router.get('/login', controller.loginGet);
router.get('/signUp', controller.signUpGet);
router.get('/blogs', controller.blogGet);
router.get('/blogs/:id', controller.blogDetailGet);
//*POST

router.post('/login', controller.loginGet);
router.post('/logout', controller.logoutPost);
router.post('/signUp', controller.signUpGet);

router.post('/blogs/:id/comments/:id', authentication, controller.commentPost);
//*Delete
router.delete('/user/:id', authentication, controller.userDel);
router.delete('/blogs/:id/comments/:id', authentication, controller.commentDel);
//*Update
router.delete('/user/:id', authentication, controller.userUp);
router.delete('/blogs/:id/comments/:id', authentication, controller.commentUp);

export default router;
