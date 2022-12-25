import Connection from '../connection';

const bookshelf = Connection.getInstance().getBookshelf();

class Project extends bookshelf.Model {
  get tableName() {
    return 'projects';
  }

  // employees() {
  //   return this.hasMany(Employee, 'project_id', 'id');
  // }
}

export default bookshelf.model('Project', Project);
