import {NextFunction, Request, Response, Router} from "express";

export const messagesRouter = Router({})

let requestCounter = 0

let requestCounterMiddleware = (req: Request, res: Response, next: NextFunction) => {
    requestCounter++
    next()
}

let someVariableMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.someVariable = 'hello'
    next()
}
let authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.token === '123') {
        next()
    } else {
        res.send(401)
    }
}

messagesRouter.use(requestCounterMiddleware)
messagesRouter.use(someVariableMiddleware) // подключаем ко всему роутеру
// app.use() - подключаем в index ко всему приложению
// someVariableMiddleware между path и handlers - к конкретному эндпоинту
messagesRouter.use(authGuardMiddleware)

messagesRouter.get('/', (req: Request, res: Response) =>{
    // @ts-ignore
    const someVariable = req.someVariable
    res.send({value: someVariable + '!!!!!' + requestCounter})
})