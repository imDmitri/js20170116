/*
Задача:
Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
*/

// Решение в учебнике

function getDecimal(num) {
  var str = "" + num;
  var zeroPos = str.indexOf(".");
  if (zeroPos == -1) return 0;
  str = str.slice(zeroPos);
  return +str;
}

// мое решение

function getDecimal(num) {
	var isNumeric = (!isNaN(parseFloat(num)) && isFinite(num)) ? true : false; // проверяем на число
	if (!isNumeric) return "error: function's argument must be numeric"; // возвращаем ошибку в случае, если аргумент - не число
	if (num.toString().indeхOf('.') === -1) return 0; // проверяем, дробное ли число

	return +(0 + '.' + num.toString().split('.')[1]);
}
