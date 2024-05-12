import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.send('hello');
});
//admin app
// router.post('/blogs/:id', controller.blogGet);
// router.delete('/blogs/:id', authentication, controller.blogDel); it is for admin app
// router.delete('/blogs/:id', authentication, controller.blogUp); this is for admin app
export default router;
