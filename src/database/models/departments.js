import Connection from '../connection';

const bookshelf = Connection.getInstance().getBookshelf();

class Departments extends bookshelf.Model {
  get tableName() {
    return 'departments';
  }
}

export default bookshelf.model('Deparments', Departments);
