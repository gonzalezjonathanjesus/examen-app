const fs = require('fs');
const path = require('path');
const productsData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json'), 'utf8'));

/*let getProductById = id => {
    for (let i = 0; i < productsData.product.length; i++) {
        return new Promise((resolve, reject) => {
            if (productsData.product[i].id === id) {
                resolve(productsData.product[i].id);
            } else {
                reject('Product with provided id not found');
            }
        });
    }
}*/

let getProductById = id => {
    for (let i = 0; i < productsData.products.length; i++) {
        if (productsData.products[i].id === id) {
            return productsData.products[i];
        } else {
            return false;
        }
    }
}

module.exports = {
    getProductById,
    products: productsData
};