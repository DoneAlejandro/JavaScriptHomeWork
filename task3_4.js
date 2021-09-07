'use strict';


const products = [
	{
		id: 3,
		price: 127,
		photos: [
		"1.jpg",
		"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
		"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];


const newProducts = products.filter(object => 'photos' in object && object.photos.length > 0);
console.log(newProducts);

const productsPrice = products.sort(function (obj1, obj2) {
	if (products[1].price > products[0].price) {
		return -1;
	}
	if (products[0].price < products[1].price) {
		return 1;
	}
	return 0;
});
console.log(productsPrice);

