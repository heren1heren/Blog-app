import { Router } from 'express';
import * as controller from '../../Controllers/index.js';
const router = Router();

//*GET
router.get('/', controller.indexPage);

router.get('/login', controller.loginPage);
router.get('/signUp', controller.signUpPage);
router.get('/blog/:id', controller.blogPage);
//*POST
// if we don't use verb as an http endpoint, so how should i name it?
router.post('/blog/:id', controller.indexPage);

router.post('/login', controller.loginPage);
router.post('/signUp', controller.signUpPage);

export default router;
