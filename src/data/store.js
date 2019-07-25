import posters from './posters.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key){
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts(){
        let products = store.get('products');

        if(!products){
            store.save('products', posters);
            products = posters;
        }

        return products;
    },
    getShoppingCart(){
        let products = store.get('shopping-cart');

        if(!products){
            products = [];
        }
        return products;
    },
    orderProduct(code, quantity){
        const shoppingCart = store.getShoppingCart();

        const order = {
            code: code,
            quantity: quantity
        };

        shoppingCart.push(order);
        store.save('shopping-cart', shoppingCart);
    }

};

export default store;