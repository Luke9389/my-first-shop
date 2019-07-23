import posters from './data/posters.js';
import renderPosters from './render-posters.js';

const sortButton = document.getElementById('sort');
const artistSelector = document.getElementById('dropdown');
const list = document.getElementById('cards');

for(let i = 0; i < posters.length; i++) {
    const poster = posters[i];
    const dom = renderPosters(poster);
    list.appendChild(dom);
}

sortButton.addEventListener('click', () => {
    let artist = artistSelector.value;
    console.log(artist);
    const selectedWorks = document.querySelectorAll('.' + artist);
    console.log(selectedWorks);


    // for(let i = 0; i < posters.length; i++) {

    // }


});