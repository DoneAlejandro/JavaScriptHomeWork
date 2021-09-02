'use strict';


function sum(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function division(a, b) {
	return a / b;
}

function multiplication(a, b) {
	return a * b;
}



function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case '+':
			return sum(arg1, arg2);
		case '-':
			return subtraction(arg1, arg2);
		case '/':
			return division(arg1, arg2);
		case '*':
			return multiplication(arg1, arg2);
	}
}



alert(mathOperation(8, 16, "+"));
alert(mathOperation(8, 16, "-"));
alert(mathOperation(8, 16, "/"));
alert(mathOperation(8, 16, "*"));