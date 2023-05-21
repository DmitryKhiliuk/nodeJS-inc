const addresses = [{id: 1, value: 'brest' }, {id: 2, value: 'minsk' }]

export const addressesRepository = {
    findAddresses(value: string | null) {
        if (value) {
            let filteredAddresses = addresses.filter(p => p.value.indexOf(value) > -1)
            return filteredAddresses
        } else {
            return addresses
        }
    },
    findAddressesById(id:number) {
        let address = addresses.find(p => p.id === id)
        return address
    },
}