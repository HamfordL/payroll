import fs from 'fs';
import path from 'path';

let user;
let password;
let host = 'localhost';
let database;
const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

if (isDev || isProd) {
  // for the app on local machines
  const dbVars = fs.readFileSync(path.join(__dirname, './db.env'), 'utf-8');

  [user, password, database] = dbVars.split('\n').map(_ => _.split('=')[1]);
} else {
  // terminal commands
  [user, password, database] = process.argv.slice(-3).map(_ => _.replace(/"/g, '').split('=')[1]);
}

export default {
  development: {
    client: 'pg',
    connection: {
      host,
      database,
      user,
      password,
      port: 5678,
    },
    // debug: true,
  },
  production: {
    client: 'pg',
    connection: {
      host,
      database,
      user,
      password,
      port: 5678,
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
  test: {
    client: 'pg',
    connection: {
      host,
      database,
      user,
      password,
    },
  },
};
