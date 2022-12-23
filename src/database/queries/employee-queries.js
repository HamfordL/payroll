import Employee from '../models/Employee';

const getEmployees = () => {
  const query = new Employee();

  return query.fetchAll().then(dbModel => dbModel.toJSON());
};

const getEmployeeById = id => {
  const query = new Employee({ id });

  return query.fetch().then(dbModel => dbModel.toJSON());
};

export default { getEmployees, getEmployeeById };
