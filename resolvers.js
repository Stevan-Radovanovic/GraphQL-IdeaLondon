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

    async deleteProductById({_id}) {
        try {
        await Product.findByIdAndDelete(_id);
        return 'Deleted a product with the following id: ' + _id;
        } catch (err) {
            console.log(err.message)
            return 'Product not deleted correctly'
        }
    },

   async updateProduct(args) {
        try {
            if(args.input.title===undefined && args.input.price===undefined) {
                return;
            }

            if(args.input.price===undefined) {
                await Product.findByIdAndUpdate(args.input._id, {$set:{title: args.input.title}});
                return 'Succesfully updated a product name to ' + args.input.title;
            }
            
            if(args.input.title===undefined) {
                await Product.findByIdAndUpdate(args.input._id, {$set:{price: args.input.price}});
                return 'Succesfully updated a product price'
            }

            await Product.findByIdAndUpdate(args.input._id, {title: args.input.title, price: args.input.price});
            return 'Succesfully updated a product'

            } catch (err) {
                console.log(err.message)
                return 'Product not updated correctly'
            }
    },

    async returnAllProducts() {
        try {
        const response = await Product.find();
        return response;
        } catch {
            return 'Products not fetched correctly'
        }
    }
}
