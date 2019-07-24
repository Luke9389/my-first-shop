import posters from '../src/data/posters.js';
import order from '../src/data/order.js';
import { findProduct, getLineTotal, calcOrderTotal } from '../src/register.js';


const test = QUnit.test;

QUnit.module('Register');

test('Find product by code', assert => {

    // arrange
    const code = 'AN-jungle';
    const expected = 'Bone Jungle';

    // act
    const foundProduct = findProduct(posters, code);

    // assert
    assert.equal(foundProduct.name, expected);
});

test('calculate line total', (assert) => {

    const quantity = 3;
    const price = 600.00;
    const expected = 1800.00;

    const total = getLineTotal(quantity, price);

    assert.equal(total, expected);

});

test('calculate order total', (assert) => {

    const expected = 4900.00;

    const orderTotal = calcOrderTotal(order, posters);

    assert.equal(orderTotal, expected);
});