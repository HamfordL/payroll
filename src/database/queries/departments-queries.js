import Departments from '../models/departments';

const getDepartments = () => {
  const query = new Departments();

  return query.fetchAll().then(dbModel => dbModel.toJSON());
};

const getDepartmentsById = id => {
  const query = new Departments({ id });

  return query.fetch().then(dbModel => dbModel.toJSON());
};

export default { getDepartments, getDepartmentsById };
