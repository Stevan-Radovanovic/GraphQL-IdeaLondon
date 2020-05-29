// @ts-nocheck
module.exports = {
    startingQuery() {
        return 'Welcome to GraphQL Idea London'
    },

    createProduct(args) {
        return 'Created ' + args.input.title + ' that costs ' + args.input.price
    },

    deleteProduct(args) {
        return 'Successfuly deleted a product'
    },

    updateProduct(args) {
        return 'Successfuly updated a product'
    },

    returnAllProducts() {
        return [{
            _id: 1, title: 'P1', price: 22
        },{
            _id: 2, title: 'P2', price: 21
        }]
    }
}
