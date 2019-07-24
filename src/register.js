
export function findProduct(posters, code) {
    for(let i = 0; i < posters.length; i++) {
        let poster = posters[i];
        if(poster.code === code) {
            return poster;
        }
    }
    return null;
}

export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

export function calcOrderTotal(cart, posters) {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        let item = findProduct(posters, cart[i].code);
        total = total + getLineTotal(cart[i].quantity, item.price);
    }
    return total;
}