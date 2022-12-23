import departmentQueries from './department-queries';
import employeeQueries from './employee-queries';

export default {
  ...departmentQueries,
  ...employeeQueries,
};
