'use strict';

const pathToImages = 'images';
const pathToProductsImages = `${pathToImage}/featured`;
const featuredItemsEl = document.querySelector('.fetured__item');


/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featured__itemtemsEl элемент с классом .featured__items
 */
function insertProductsIntoPage(products, featured__itemtemsEl) {
	let productsMarkup = '';
	for (let product of products) {
		productsMarkup += getProductMarkup(product);
	}
	featured__itemtemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

insertProductsIntoPage(products, featured__itemtemsEl)