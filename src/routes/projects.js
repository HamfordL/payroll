import express from 'express';

import queries from '../database/queries';

export const projectsRoute = express.Router({ mergeParams: true });
export const projectRoute = express.Router({ mergeParams: true });

projectsRoute.get('/', (req, res) => {
  return queries.getProjects().then(projects => res.status(200).json(projects));
});

projectRoute.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Bad Request. Missing id in path.' });
  }

  const project_id = Number(id);
  if (Number.isNaN(project_id)) {
    return res.status(400).json({ message: 'Bad Request. Value for id must be a valid number.' });
  }

  return queries.getProjectById(project_id).then(project => res.status(200).json(project));
});
