// @ts-nocheck
const Product = require("./product.model");

module.exports = {
    startingQuery() {
        return 'Welcome to GraphQL Idea London'
    },

    async createProduct(args) {
       const product = new Product({
           title: args.input.title,
           price: args.input.price
       });
       try {
        await product.save();
        return 'Created ' + args.input.title + ' that costs ' + args.input.price
       } catch {
        return 'Product not created succesfully'
       }
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
