import express from 'express';

import queries from '../database/queries';

export const employeesRoute = express.Router({ mergeParams: true });
export const employeeRoute = express.Router({ mergeParams: true });

employeesRoute.get('/', (req, res) => {
  return queries.getEmployees().then(departments => res.status(200).json(departments));
});

employeeRoute.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Bad Request. Missing id in path.' });
  }

  const dept_id = Number(id);
  if (Number.isNaN(dept_id)) {
    return res.status(400).json({ message: 'Bad Request. Value for id must be a valid number.' });
  }

  return queries.getEmployeeById(dept_id).then(dept => res.status(200).json(dept));
});
