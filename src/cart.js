// import cart from './data/order.js';
import store from './data/store.js';
import { calcOrderTotal } from './register.js';
import { renderRowItem } from './render-row-item.js';
import { renderDiscountRow } from './render-row-item.js';
import toUSD from './format.js';
import coupons from './data/coupon-codes.js';

const couponButton = document.getElementById('apply-code');
const couponCode = document.getElementById('user-coupon');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');

let cart = store.getShoppingCart();
let posters = store.getProducts();

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const poster = store.getProduct(lineItem.code);
    const dom = renderRowItem(lineItem, poster);

    tbody.appendChild(dom);
}

let totalListItem = document.createElement('th');
let subtotal = calcOrderTotal(cart, posters);
totalListItem.textContent = toUSD(calcOrderTotal(cart, posters));
let tfoot = document.querySelector('tfoot>tr');
tfoot.appendChild(totalListItem);

let discountApplied = false;

couponButton.addEventListener('click', () => {
    const userCode = couponCode.value;
    if(coupons[userCode] && !discountApplied) {
        discountApplied = true;
        table.appendChild(renderDiscountRow(coupons[userCode], subtotal));
        tfoot.removeChild(totalListItem);
        totalListItem.textContent = toUSD(subtotal - (subtotal * coupons[userCode] / 100));
        tfoot.appendChild(totalListItem);
    } else if(discountApplied) {
        alert('You\'ve already used a coupon!');
    } else { alert('The coupon code you entered is invalid.'); }
});

export default totalListItem;
