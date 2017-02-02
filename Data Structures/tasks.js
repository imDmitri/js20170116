/*
Подраздел: "Числа"

ВНИМАНИЕ!

Задачи типа "Почему этот код работает так...",
а также задачи с приоритетом ниже 4
здесь отсутствуют

*/

/*

Задача 1

Создайте страницу,
которая предлагает ввести два числа и выводит их сумму.

*/

// ES5
'use strict';

function sumNumbers(a,b){
	let a = +prompt('Введите число 1',''); 
	let b = +prompt('Введите число 2','');

	return a + b;
}
alert(sumNumbers());

// ES2015

'use strict';

let sumNumbers = (
	a = +prompt('Введите число 1',''),
	b = +prompt('Введите число 2','')
	) => a+b;

alert(sumNumbers());

/*
Задача 3

Представьте себе электронный магазин.
Цены даны с точностью до копейки(цента, евроцента и т.п.)
...
*/

(0.1 + 0.2).toFixed(2) + '$';


/*
Задача 5

Напишите функцию getDecimal(num),
которая возвращает десятичную часть числа
...
*/

// ES5

'use strict';

function getDecimal(n){

	// проверяем n на число
	if (!isNaN(parseFloat(n)) && isFinite(n)) {
		// если n - число, получаем значение после точки
		let res = +(0 + '.' + n.toString().split('.')[1]);
		// вернуть res. Если res = undefined, вернуть 0
		return (res) ? res : 0;
	} 

	//если n - не число, возвращаем ошибку
	return 'error: function\'s argument must be numeric';
}

/*
Задача 6

Формула Бине
*/

// ES5
"use strict";

function getBinet(n) {
	// по сути, все решение находится в описании к задаче
	// ϕn/√5, где ϕ=(1+√5)/2
	// поэтому решение, в принципе, можно записать одной строкой
	
	return Math.round(Math.pow((1 + Math.sqrt(5)) * 0.5, n) / Math.sqrt(5));
}

/*
Подраздел: "Строки"

ВНИМАНИЕ!

Задачи типа "Почему этот код работает так...",
а также задачи с приоритетом ниже 4
здесь отсутствуют

*/

/*

Задача 1

Напишите функцию ucFirst(str),
которая возвращает строку str с заглавным первым символом
*/

// ES5
"use strict";

function ucFirst(str) {
	return (str !== '') ? str[0].toUpperCase() + str.slice(1) :
	'';
}

/*

Задача 2

Напишите функцию checkSpam(str), которая возвращает true,
если строка str содержит „viagra“ или „XXX“, а иначе false.
*/

// ES5
"use strict";

function checkSpam(str) {
  let forbidden = ['viagra','xxx'];
  // цикл для проверки строки на наличие спама
  for (let i = 0; i < forbidden.length; i++) {
  	// если вхождение обнаружено, вернуть true
    if (~str.toString().toLowerCase().indexOf(forbidden[i])) return true;
  }
  return false;
}

// решил сделать так, потому так удобнее добавлять
// спамные слова в массив.

/*

Задача 3

Создайте функцию truncate(str, maxlength),
которая проверяет длину строки str...
*/

// тест для задачи не совсем корректен, вот решение из учебника
"use strict";

function truncate(str, maxlength) {
  return (str.length > maxlength) ? 
    str.slice(0, maxlength - 1) + '…' : str;
}

// но оно не проходит, если запустить его для строки типа
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)    

// мой вариант совпадает
"use strict";

function truncate(str, maxlength) {
	// если строка больше заданного значения maxlenght, обрезаем ее
	return (str.length > maxlength) ? str.slice(0, maxlength - 3) + '…' :
	// если нет, возвращаем исходную строку
	str;
}

/*

Задача 4

Создайте функцию extractCurrencyValue(str),
которая будет из такой строки выделять число-значение, в данном случае 120.
*/
"use strict";

function extractCurrencyValue(str){
	return (typeof str === 'string' && !+str.slice(1) === false) ? +str.slice(1) :
	'error: check argument';
}

/* мой вариант подразумевает обработку:
extractCurrencyValue('')
extractCurrencyValue(false)
extractCurrencyValue(NaN)
extractCurrencyValue('$$123')
*/

/*
Подраздел: "Объекты: перебор свойств"

ВНИМАНИЕ!

Задачи типа "Почему этот код работает так...",
а также задачи с приоритетом ниже 4
здесь отсутствуют

*/

/*

Задача 1

Создайте функцию isEmpty(obj),
которая возвращает true, если в объекте нет свойств и
false – если хоть одно свойство есть.
*/

"use strict";

function isEmpty(obj) {
	return !Object.keys(obj).length;
}

/*

Задача 2

Есть объект salaries с зарплатами.
Напишите код, который выведет сумму всех зарплат.
*/

// конечно, решение в учебнике намного лучше
// выкладываю этот вариант только для ознакомления

"use strict";

function sumObjValues(obj) {
	let sum = [];

	for (let employee in obj) {
		let value = obj[employee];
		sum.push(value);
	}

	let total = 0;
	for (let i = 0; i < sum.length; i++) {
		total += sum[i];
	}
	return total;
}
sumObjValues(salaries); 

/*

Задача 2

Напишите код, который выведет имя сотрудника,
у которого самая большая зарплата.
*/

"use strict";

function getRichest(obj) {
	if (typeof obj === 'object') {
		if (!Object.keys(obj).length) return 'нет сотрудников';

		let max = 0, name;
		for (let employee in obj) {
			if (max < obj[employee]) {
				max = obj[employee];
				name = employee;
			} 
		}
		return name;
	}
	return 'error: check argument';
}
getRichest(salaries);

/*
Подраздел: "Массивы с числовыми индексами"

ВНИМАНИЕ!

Здесь представлены решения только тех задач,
которые показались мне полезными и интересными

*/

/*

Задача 1

Создайте функцию addClass(obj, cls),
которая добавляет в список класс cls,
но только если его там еще нет.
*/

function addClass(obj, cls) {
	let arr = obj.className ? obj.className.split(' ') : [];
	for (let className in obj) {
		if (!~obj['className'].indexOf(cls)) {
			arr.push(obj['className'] + ' ' + cls);
			return obj['className'] = arr.join(' ');
		} else {
			return;
		}
	}
}

/*

Задача 5

Создайте калькулятор для введённых значений
*/

let sum = [];
let total = 0;

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

while (true) {
	let n = prompt('Введите число', 0);
	if (!isNumeric(n) || n === null || n === "") break;
	sum.push(+n);
}

for (let i = 0; i < sum.length; i++) {
	total += sum[i];
}
alert(total);

/*

Задача 7

Поиск в массиве
*/

function find(arr,value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) return i;
	}
	return -1;
}

/*
Подраздел: "Массивы с числовыми индексами"

ВНИМАНИЕ!

Задачи типа "Почему этот код работает так...",
а также задачи с приоритетом ниже 4
здесь отсутствуют

*/

/*

Задача 1

Добавить класс в строку
*/

function addClass(obj, cls){
	let c = (obj.className) ? obj.className.split(' ') : [];

	for (let i = 0; i < c.length; i++) {
		if (c[i] === cls) return;
	}

	c.push(cls);

	obj.className = c.join(' ');
}

/*

Задача 3

Функция removeClass
*/

function removeClass(obj, cls) {
	let value = obj.className ? obj.className.split(' ') : [];
  
	for (var i = 0; i < value.length; i++) {
		if (value[i] === cls) {
		  value.splice(i, 1);
		  i--;
		}
	}
	obj.className = value.join(' ');
}

/*

Задача 3

Фильтрация массива "на месте"
*/

function filterRangeInPlace(arr, a, b) {
	for (var i = 0; i < arr.length; i++){
		if (a > arr[i] || arr[i] > b) arr.splice(i,1);
	}
}

/*

Задача 7

Сортировка объектов
*/

function printList(obj) {
	var tmp = obj;

	while (tmp) {
		alert(tmp.value);
		tmp = tmp.next;
	}
}
