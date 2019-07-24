import { getLineTotal } from './register.js';
import toUSD from './format.js';

function renderRowItem(lineItem, poster){
    const tr = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = poster.name;
    tr.appendChild(name);

    const quantity = document.createElement('td');
    quantity.textContent = lineItem.quantity;
    tr.appendChild(quantity);

    const price = document.createElement('td');
    price.textContent = toUSD(poster.price);
    tr.appendChild(price);

    const total = document.createElement('td');
    total.textContent = toUSD(getLineTotal(lineItem.quantity, poster.price));
    tr.appendChild(total);

    return tr;
}

export default renderRowItem;