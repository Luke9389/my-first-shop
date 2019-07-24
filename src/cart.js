import cart from './data/order.js';
import posters from './data/posters.js';
import { findProduct, calcOrderTotal } from './register.js';
import renderRowItem from './render-row-item.js';
import toUSD from './format.js';

const tbody = document.querySelector('tbody');

for(let i = 0; i < cart.length; i++){
    const lineItem = cart[i];
    const poster = findProduct(posters, lineItem.code);
    const dom = renderRowItem(lineItem, poster);

    tbody.appendChild(dom);
}

let totalListItem = document.createElement('th');
totalListItem.textContent = toUSD(calcOrderTotal(cart, posters));
let tfoot = document.querySelector('tfoot>tr');
tfoot.appendChild(totalListItem);
