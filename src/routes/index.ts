import {  Router } from 'express';

import userRoutes from './user.routes';
import placeRoutes from './place.routes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/place', placeRoutes)
export default routes;