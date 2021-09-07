'use strict';


const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];
/**
 * Функция для вычета процента
 * @param  {number} newPrice - новая цена с учётом скидки
 */
products.forEach(newPrice => {
	newPrice = newPrice.price - newPrice.price * 0.15;
});
console.log(products);