import Projects from '../models/Project';

const getProjects = () => {
  const query = new Projects();

  return query.fetchAll().then(dbModel => dbModel.toJSON());
};

const getProjectsById = id => {
  const query = new Projects({ id });

  return query.fetch().then(dbModel => dbModel.toJSON());
};

export default { getProjects, getProjectsById };
