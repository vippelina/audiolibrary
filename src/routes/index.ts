// Todo add import subroutes here and use them
import { Router, Request, Response, NextFunction } from 'express';
import CrudRoute from './CrudRoute';
import Audio from '../models/audio';
const route: Router = Router();

route.use('/audio', new CrudRoute(Audio).router);
export default route;
