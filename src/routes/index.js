import express from 'express';

import { departmentsRoute } from './departments';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'connected' });
});

router.use('/departments', departmentsRoute);

export default router;
