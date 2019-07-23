function renderPosters(jungle) {
    const li = document.createElement('li');
    li.className = jungle.code;
    li.title = jungle.description;

    const h3 = document.createElement('h3');
    h3.textContent = jungle.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = jungle.image;
    img.alt = jungle.name + ' image';
    li.appendChild(img);

    const artistP = document.createElement('p');
    artistP.className = 'artist';
    artistP.textContent = jungle.category;
    li.appendChild(artistP);

    const priceP = document.createElement('p');
    priceP.className = 'price';

    const usd = jungle.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    priceP.textContent = usd;
    li.appendChild(priceP);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = jungle.code;
    li.appendChild(button);

    return li;
}

export default renderPosters;