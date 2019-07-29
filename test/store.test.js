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

test('order product to non-empty shopping cart', assert => {
    //arrange
    const code = 'mochi';
    const expected = [{
        code: 'mochi',
        quantity: 2
    }];
    //act
    store.orderProduct(code, 1);
    store.orderProduct(code, 1);
    const shoppingCart = store.getShoppingCart();
    //assert
    assert.deepEqual(shoppingCart, expected);
});

test('adds new product', assert => {
    //arrange
    const product = {
        code: 'TM-Lineage',
        image: 'assets/TM-Lineage',
        name: 'Lineage',
        description: 'Lineage by Takeshi Murakami',
        category: 'Takeshi Murakami',
        acronym: 'TM',
        price: 800.00,
        cost: 75.00
    };
    //act
    store.addProduct(product);
    const posters = store.getProducts();

    //assert
    assert.deepEqual(posters[posters.length - 1], product);
});

test('return empty array from get sales', assert => {
    //arrange
    const expected = [];
    //act
    const result = store.getSales();

    //assert
    assert.deepEqual(result, expected);
});