import store from './data/store.js';
import renderPosters from './render-posters.js';

const sortButton = document.getElementById('sort');
const revealButton = document.getElementById('reveal');
const artistSelector = document.getElementById('dropdown');
const list = document.getElementById('cards');

let posters = store.getProducts();

for(let i = 0; i < posters.length; i++) {
    const poster = posters[i];
    const dom = renderPosters(poster);
    list.appendChild(dom);
}

sortButton.addEventListener('click', () => {
    let artist = artistSelector.value;

    const selectedWorks = document.querySelectorAll('.' + artist);
    const allWorks = document.querySelectorAll('li');

    for(let i = 0; i < allWorks.length; i++) {
        let work = allWorks[i];
        work.classList.add('hidden');
    }

    for(let i = 0; i < selectedWorks.length; i++) {
        let work = selectedWorks[i];
        work.classList.remove('hidden');
    }
});

revealButton.addEventListener('click', () => {
    const allWorks = document.querySelectorAll('li');

    for(let i = 0; i < allWorks.length; i++) {
        let work = allWorks[i];
        work.classList.remove('hidden');
    }
});