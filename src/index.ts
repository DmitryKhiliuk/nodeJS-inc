import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addressess-router";
import {messagesRouter} from "./routes/messages-router";
const app = express()
const port = process.env.PORT || 3000




const parserMiddleware = bodyParser()  // для обработки body POST запросов
app.use(parserMiddleware)

app.get('/', (req: Request, res: Response) => {
    res.send('Test ')
})

app.use('/products', productsRouter)
app.use('/address', addressesRouter)
app.use('/messages', messagesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})