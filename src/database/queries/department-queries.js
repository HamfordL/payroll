import Departments from '../models/Department';

const getDepartments = () => {
  const query = new Departments();

  return query.fetchAll().then(dbModel => dbModel.toJSON());
};

const getDepartmentById = id => {
  const query = new Departments({ id });

  return query.fetch().then(dbModel => dbModel.toJSON());
};

export default { getDepartments, getDepartmentById };
