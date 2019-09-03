import { Router } from 'express';

import CoffeeController from './app/controllers/CoffeeController';

const routes = new Router();

routes.get('/coffees', CoffeeController.index);
routes.post('/coffees', CoffeeController.store);
routes.put('/coffees/:id', CoffeeController.update);

export default routes;
