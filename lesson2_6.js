'use strict';


let money = parseInt(prompt("Введите сколько денег хотите внести на счёт: "));
alert(`Ваша сумма в ${money} рубл${sklonenie(money, v) успешно зачислена.}`);



function sklonenie(number, txt) {
	var cases = [2, 0, 1, 1, 1, 2];
	return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}


let v = ['ь', 'я', 'ей'];

