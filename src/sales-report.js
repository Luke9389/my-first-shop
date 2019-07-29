import store from './data/store.js';
import posters from './data/posters.js';
import toUSD from './format.js';
import { calcOrderTotal } from './register.js';
import { renderRowItem } from './render-row-item.js';

let sales = store.getSales();
const tbody = document.querySelector('tbody');

for(let i = 0; i < sales.length; i++) {
    const lineItem = sales[i];
    const poster = store.getProduct(lineItem.code);
    const dom = renderRowItem(lineItem, poster);

    tbody.appendChild(dom);
}

let totalListItem = document.createElement('th');
let subtotal = calcOrderTotal(sales, posters);
totalListItem.textContent = toUSD(subtotal);
let tfoot = document.querySelector('tfoot>tr');
tfoot.appendChild(totalListItem);

store.clearCart();