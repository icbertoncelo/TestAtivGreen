import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';
import databaseConfig from './config/database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useNewUrlParser: true,
    });
  }
}

export default new App().server;
