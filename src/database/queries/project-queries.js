import Project from '../models/Project';

const getProjects = () => {
  const query = new Project();

  return query.fetchAll().then(dbModel => dbModel.toJSON());
};

const getProjectById = id => {
  const query = new Project({ id });

  return query.fetch().then(dbModel => dbModel.toJSON());
};

export default { getProjects, getProjectById };
