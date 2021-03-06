import { Router, Request, Response, NextFunction } from 'express';
import { Model, Document } from 'mongoose';
export default class CrudRoute {
    public router: Router;
    public model: Model<Document>;
    constructor(model: Model<Document>) {
        this.router = Router();
        this.model = model;
        this.list = this.list.bind(this);
        this.getById = this.getById.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.delete = this.delete.bind(this);
        this.setupRoutes();
    }

    public list(req: Request, res: Response, next: NextFunction) {
        return this.model.find()
        .then(docs => {
            res.send(docs);
        }, e => next(e));
    }

    public post(req: Request, res: Response, next: NextFunction) {
        const createData: object = req.body;
        return this.model.create(createData)
        .then((created: Document) => {
            res.send(created);
        }, e => next(e));
    }

    public getById(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        return this.model.findById(id)
        .then(doc => {
            if (doc) return res.send(doc);
            res.status(404);
            res.send('Not found');
        });
    }

    public put(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const updateData: object = req.body;
        return this.model.findOneAndUpdate({_id: id}, updateData, {new: true})
        .then((updated) => res.send(updated), e => next(e));
    }

    public delete(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        return this.model.findOneAndDelete({_id: id})
        .then(() => {
            res.status(202).send();
        }, e => next(e));
    }

    public setupRoutes() {
        this.router.get('/:id', this.getById);
        this.router.get('/', this.list);
        this.router.post('/', this.post);
        this.router.put('/:id', this.put);
        this.router.delete('/:id', this.delete);
    }
}