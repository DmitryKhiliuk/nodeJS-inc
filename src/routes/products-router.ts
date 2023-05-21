import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";

export const productsRouter = Router({})



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
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body)
    res.status(201).send(newProduct)
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    let product = productsRepository.updateProduct(+req.params.id, req.body.title)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
