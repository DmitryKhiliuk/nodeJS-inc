import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
const app = express()
const port = process.env.PORT || 3000

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'brest' }, {id: 2, value: 'minsk' }]

const parserMiddleware = bodyParser()  // для обработки body POST запросов
app.use(parserMiddleware)

app.get('/', (req: Request, res: Response) => {
    res.send('Test ')
})

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title === 'string') {
        let searchString = req.query.title
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
    res.send(products)
})

app.get('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})

app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }
    res.send(404)
})

app.post('/products', (req: Request, res: Response) => {
    const newProduct = req.body
    products.push(newProduct)
    res.status(201).send(newProduct)
})
app.put('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
})

app.get('/products/:productTitle', (req: Request, res: Response) => {
    let product = products.find(p => p.title === req.params.productTitle);
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})

app.get('/address', (req: Request, res: Response) => {
    res.send(addresses)
})

app.get('/address/:id', (req: Request, res: Response) => {
    let address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})