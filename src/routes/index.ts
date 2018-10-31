// Todo add import subroutes here and use them
import {Router, Request, Response, NextFunction} from 'express'
const route: Router = Router()

route.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200);
    res.send('Audio Library');
})

export default route
