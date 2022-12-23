import express from 'express';

import { departmentsRoute, departmentRoute } from './departments';
import { employeesRoute, employeeRoute } from './employees';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'connected' });
});

router.use('/departments', departmentsRoute);
router.use('/department', departmentRoute);
router.use('/employees', employeesRoute);
router.use('/employee', employeeRoute);

export default router;
