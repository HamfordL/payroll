import express from 'express';

import { departmentsRoute, departmentRoute } from './departments';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'connected' });
});

router.use('/departments', departmentsRoute);
router.use('/department', departmentRoute);

export default router;
