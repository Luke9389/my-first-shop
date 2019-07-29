import posters from './posters.js';
import { findProduct } from '../register.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get('products');

        if(!products) {
            store.save('products', posters);
            products = posters;
        }

        return products;
    },
    getProduct(code) {
        const products = store.getProducts();
        const product = findProduct(products, code);
        return product;
    },
    getShoppingCart() {
        let products = store.get('shopping-cart');

        if(!products) {
            products = [];
        }
        return products;
    },
    orderProduct(code, quantity) {
        const shoppingCart = store.getShoppingCart();
        const product = findProduct(shoppingCart, code);

        if(product) {
            product.quantity += quantity;
        } else {
            const order = {
                code: code,
                quantity: quantity,
            };
            shoppingCart.push(order);
        }
        store.save('shopping-cart', shoppingCart);
    },
    placeOrder(cart) {
        const sales = store.getSales();

        for(let i = 0; i < cart.length; i++) {
            const code = cart[i].code;
            const quant = cart[i].quantity;
            let product = findProduct(sales, code);

            if(product) {
                product.quantity += quant;
            } else {
                const order = {
                    code: code,
                    quantity: quant,
                };
                sales.push(order);
            }
        }
        store.save('sales', sales);
    },
    addProduct(product) {
        const products = store.getProducts();
        products.push(product);
        store.save('products', products);
    },
    getSales() {
        let sales = store.get('sales');

        if(!sales) {
            sales = [];
        }
        return sales;
    },
};

export default store;