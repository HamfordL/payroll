import Connection from '../connection';

const bookshelf = Connection.getInstance().getBookshelf();

class Department extends bookshelf.Model {
  get tableName() {
    return 'departments';
  }

  // employees() {
  //   return this.hasMany(Employee, 'department_id', 'id');
  // }
}

export default bookshelf.model('Deparment', Department);
