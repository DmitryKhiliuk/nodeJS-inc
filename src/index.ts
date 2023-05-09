import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000

const products = [{title: 'tomato'}, {title: 'orange'}]
const address = [{value: 'brest'}, {value: 'minsk'}]

app.get('/', (req: Request, res: Response) => {
    res.send('Test')
})

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})

app.get('/address', (req: Request, res: Response) => {
    res.send(address)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})