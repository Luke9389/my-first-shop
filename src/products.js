import posters from './data/posters.js';
import renderPosters from './render-posters.js';

const list = document.getElementById('cards');

for(let i = 0; i < posters.length; i++) {
    const poster = posters[i];
    const dom = renderPosters(poster);
    list.appendChild(dom);
}