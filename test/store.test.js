import store from '../src/data/store.js';
import posters from '../src/data/posters.js';

const test = QUnit.test;

QUnit.module('Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save', assert => {
    // arrange
    const key = 'cat';
    const cat = { name: 'mochi' };
    // act
    store.save(key, cat);
    const got = store.get(key);

    // assert
    assert.deepEqual(got, cat);
});

test('get products returns bootstrapped data', assert => {
    //act
    const products = store.getProducts();

    //assert
    assert.deepEqual(products, posters);
});

test('get shopping cart', assert => {
    //arrange
    const expected = [];

    //act 
    const result = store.getShoppingCart();

    //assert
    assert.deepEqual(result, expected);
});

test('order product code to empty shopping cart', assert => {
    //arrange
    const code = 'mochi';
    const quantity = 1;
    const expected = [{
        code: 'mochi',
        quantity: 1
    }];

    //act
    store.orderProduct(code, quantity);
    const shoppingCart = store.getShoppingCart();
    //assert
    assert.deepEqual(shoppingCart, expected);
});
