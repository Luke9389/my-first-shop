import store from './data/store.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const image = formData.get('image');
    getBase64(image, (base64Url) => {

        const product = {
            code: formData.get('code'),
            image: base64Url,
            name: formData.get('name'),
            description: formData.get('description'),
            category: formData.get('category'),
            acronym: formData.get('acronym'),
            price: +formData.get('price'),
            cost: +formData.get('cost'),
        };

        store.addProduct(product);

        alert('Product added to store');

        form.reset();
    });
});
//Black box of mystery from Stack Overflow
//https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };
}