import express from 'express';

import queries from '../database/queries';
import departments from '../database/models/departments';

export const departmentsRoute = express.Router({ mergeParams: true });

departmentsRoute.get('/', (req, res) => {
  return queries.getDepartments().then(departments => res.status(200).json(departments));
});
