import {NextFunction, Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";
import {body, validationResult} from "express-validator";
import {validationMiddleware} from "../middlewares/validation";

export const productsRouter = Router({})

const titleValidation = body('title').trim().isLength({min: 3, max: 10})


productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts( typeof req.query.title === 'string' ? req.query.title : null)
    res.send(foundProducts)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = productsRepository.findProductById(+req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.get('/:title', (req: Request, res: Response) => {
    let product = productsRepository.findProductByTitle(req.params.title);
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})
productsRouter.post('/',titleValidation,  validationMiddleware, (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body)
    res.status(201).send(newProduct);


})
productsRouter.put('/:id', (req: Request, res: Response) => {
    let product = productsRepository.updateProduct(+req.params.id, req.body.title)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
