import {Request, Response, Router} from "express";
import {addressesRepository} from "../repositories/addresses-repository";

export const addressesRouter = Router({})



addressesRouter.get('/', (req: Request, res: Response) => {
    const foundAddresses = addressesRepository.findAddresses( typeof req.query.value === 'string' ? req.query.value : null)
    res.send(foundAddresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addressesRepository.findAddressesById(+req.params.id);
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})
