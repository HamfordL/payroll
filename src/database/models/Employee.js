import Connection from '../connection';
// import Department from './Department';

const bookshelf = Connection.getInstance().getBookshelf();

class Employee extends bookshelf.Model {
  get tableName() {
    return 'employees';
  }

  // department() {
  //   return this.belongsTo(Department, 'department_id', 'id');
  // }
}

export default bookshelf.model('Employee', Employee);
