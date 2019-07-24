import posters from '../src/data/posters.js';
import renderRowItem from '../src/render-row-item.js';
import { findProduct } from '../src/register.js';


const test = QUnit.test;

QUnit.module('Render Cart Item');

test('renders cart row', assert => {
    // arrange
    const lineItem = {
        code: 'M-orb',
        quantity: 3
    };
    const orb = findProduct(posters, lineItem.code);
    const expected = '<tr><td>Orb</td><td>3</td><td>$600.00</td><td>$1,800.00</td></tr>';

    // act
    const dom = renderRowItem(lineItem, orb);
    const html = dom.outerHTML;

    // assert
    assert.equal(html, expected);
});