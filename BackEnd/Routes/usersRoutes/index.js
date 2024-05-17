import { Router } from 'express';
import 'dotenv/config';

import * as controller from '../../Controllers/index.js';

const router = Router();

//*GET
router.get('/', controller.indexGet);

router.get('/login', controller.loginGet);
router.get('/signUp', controller.signUpGet);
router.get('/blogs', controller.blogGet);
router.get('/blogs/:id', controller.blogDetailGet);
//*POST

//? creating jwt token when post login successful
router.post('/login', controller.loginPost);

//?delete jwt token when user log out
router.post('/', controller.blogPost);
router.post('/logout', controller.logoutPost);
router.post('/signUp', controller.signUpPost);

router.post('/blogs/:id', controller.commentPost);

//*Delete

router.delete('/users/:id', controller.userDel);
router.delete('/blogs/:id/comments/:id', controller.commentDel);
//*Update
router.put('/users/:id', controller.userUp);
router.put('/blogs/:id/', controller.BlogUp);
export default router;
