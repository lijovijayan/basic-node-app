import { Router } from 'express';
import cities from '@routes/city.route';

const routes = Router();

routes.use('/basic-app/api/v1/cities', cities);

export default routes;
