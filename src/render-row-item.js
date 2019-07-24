import { getLineTotal } from './register.js';
import toUSD from './format.js';

export function renderRowItem(lineItem, poster) {
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

export function renderDiscountRow(discount, subtotal) {
    const tr = document.createElement('tr');
    tr.classList.add('discountRow');

    const td = document.createElement('td');
    tr.appendChild(td);

    const text = document.createElement('td');
    text.textContent = 'Discount: ' + discount + '%';
    tr.appendChild(text);

    const sub = document.createElement('td');
    sub.textContent = 'Subtotal: ' + toUSD(subtotal);
    tr.appendChild(sub);

    const savingsRowItem = document.createElement('td');
    let savings = subtotal * discount / 100;
    savingsRowItem.textContent = 'Savings: ' + toUSD(parseInt(savings));
    tr.appendChild(savingsRowItem);

    return tr;
}
