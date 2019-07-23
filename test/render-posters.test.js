import renderPosters from '../src/render-posters.js';

const test = QUnit.test;

Qunit.module('Render Posters');

test('renders a fruit', assert => {
    //arrange
    const jungle = {
        code: 'AN-jungle',
        image: 'assets/AN-jungle.jpg',
        name: 'Jungle',
        description: 'Jungle by Alex Nino',
        category: 'Alex Nino',
        price: 600.00,
        cost: 10
    };
    const expected = '<li class="apple" title="A sweet, delicious forbidden-to-some
    treat">
        < h3 > Bone Jungle</h3 >
            <img src="assets/AN-jungle.jpg">
                <p>
                    Alex Nino
                    </p>
                <p>
                    $600.00
                    </p>
                <p>
                    <button value="apple">Add</button>
                </p>
                </li>


    //act
    const dom = renderPosters(jungle);
    const html = dom.outerHTML;
    //assert
    assert.equal(html, expected);
});