import Departments from '../models/departments';

const getDepartments = () => {
  const query = new Departments();

  return query.fetchAll().then(dbModel => dbModel.toJSON());
};

export default { getDepartments };
