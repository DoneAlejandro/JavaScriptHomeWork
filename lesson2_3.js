'use strict';


let a = parseInt(prompt("Введите значение a"));
let b = parseInt(prompt("Введите значение b"));

if (a >= 0 && b >= 0) {
	alert (a - b);
} else if (a < 0 && b < 0) {
	alert (a + b);
} else if (a * b < 0) {
	alert (a + b);
}