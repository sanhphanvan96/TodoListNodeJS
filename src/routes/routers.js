import express from 'express';
import task from './taskRoutes';
import account from './accounts';

const router = express.Router();

router.use('/', task());
router.use('/account', account);
export default router;