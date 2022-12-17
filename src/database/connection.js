import knex from 'knex';
import bookshelf from 'bookshelf';
import knexConfig from '@src/knexfile';

export default class Connection {
  static dbInstance = new Connection();

  knexInstance = null;

  bookshelfInstance = null;

  constructor() {
    if (Connection.dbInstance) {
      throw new Error('Error: Instantiation failed: Use Connection.getInstance() instead of new.');
    }

    const env = process.env.NODE_ENV || 'development';
    this.knexInstance = knex(knexConfig[env]);
    this.bookshelfInstance = bookshelf(this.knexInstance);

    Connection.dbInstance = this;
  }

  static getInstance() {
    return Connection.dbInstance;
  }

  getKnex() {
    return this.knexInstance;
  }

  getBookshelf() {
    return this.bookshelfInstance;
  }
}
