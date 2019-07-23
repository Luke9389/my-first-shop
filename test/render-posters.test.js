import renderPosters from '../src/render-posters.js';

const test = QUnit.test;

QUnit.module('Render Posters');

test('renders a fruit', assert => {
    //arrange
    const jungle = {
        code: 'AN-jungle',
        image: 'assets/AN-jungle.jpg',
        name: 'Bone Jungle',
        description: 'Bone Jungle by Alex Nino',
        category: 'Alex Nino',
        acronym: 'AN',
        price: 600.00,
        cost: 10
    };
    const expected = '<li class="AN-jungle AN" title="Bone Jungle by Alex Nino"><h3>Bone Jungle</h3><img src="assets/AN-jungle.jpg" alt="Bone Jungle image"><p class="artist">Alex Nino</p><p class="price">$600.00</p><button value="AN-jungle">Add</button></li>';

    //act
    const dom = renderPosters(jungle);
    const html = dom.outerHTML;
    //assert
    assert.equal(html, expected);
});