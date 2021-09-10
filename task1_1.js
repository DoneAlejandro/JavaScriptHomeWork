'use strict';



function Product (name, price) {
	this.name = name;
	this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
	alert(this.price - this.price * 0.25);
};


let obj = new Product('Alex', 1000);
obj.make25PercentDiscount();



class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	make25PercentDiscount() {
		alert(this.price - this.price * 0.25);
	}
}

let obj = new Product('Alex', 1000);
obj.make25PercentDiscount();