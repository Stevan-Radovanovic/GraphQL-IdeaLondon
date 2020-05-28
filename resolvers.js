// @ts-nocheck
module.exports = {
    hello() {
        return 'Hello World'
    },

    createProduct(args) {
        return 'Created ' + args.input.title + ' that costs ' + args.input.price
    }
}
