import departmentQueries from './department-queries';
import employeeQueries from './employee-queries';
import projectQueries from './project-queries';

export default {
  ...departmentQueries,
  ...employeeQueries,
  ...projectQueries,
};
