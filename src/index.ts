import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000

const products = [{title: 'tomato'}, {title: 'orange'}]
const addresses = [{id: 1, value: 'brest' }, {id: 2, value: 'minsk' }]

app.get('/', (req: Request, res: Response) => {
    res.send('Test')
})

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
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