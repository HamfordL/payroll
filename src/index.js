import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

// type-proof pg inputs
pg.types.setTypeParser(pg.types.builtins.INT8, value => parseInt(value));
pg.types.setTypeParser(pg.types.builtins.FLOAT8, value => parseFloat(value));
pg.types.setTypeParser(pg.types.builtins.NUMERIC, value => parseFloat(value));

// setup env vars
dotenv.config();

// init server
const app = express();
const port = 9000;

// parsers
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Content-Length, Accept, Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  next();
});
app.use(cors());

// health check
app.get('/health', (req, res) => res.status(200).json({ status: 'OK' }));

// application routes
// TODO: add routes

// error handler
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(500).json({ error });
});

app.listen(port, () => console.log(`Listening to port: ${port}`));
