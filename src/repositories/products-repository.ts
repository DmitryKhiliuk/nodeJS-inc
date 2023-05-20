const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRepository = {
    findProducts(title: string | null ) {
        if (title) {
           let filteredProducts = products.filter(p => p.title.indexOf(title) > -1)
            return filteredProducts
        } else {
            return products
        }
    },
    findProductById(id:number) {
        let product = products.find(p => p.id === id)
        return product
    },
    findProductByTitle(title:string) {
        let product = products.find(p => p.title === title)
        return product
    },
    createProduct(newProduct: {id: number, title: string}) {
        products.push(newProduct)
        return newProduct
    },
    updateProduct(id: number, title: string) {
        let product = products.find(p => p.id === id);
        if (product) {
            product.title = title
            return product
        } else {
            return false
        }
    },
    deleteProduct(id:number) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1)
                return true
            }
        }
        return false
    },
}