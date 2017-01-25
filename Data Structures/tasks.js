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

function getDecimal(x) {
	var isNumeric = (!isNaN(parseFloat(x)) && isFinite(x)) ? true : false;
	if (!isNumeric) return "error: function's argument must be numeric";
	if (x.toString().indexOf('.') === -1) return 0;
  
	return +(0 + '.' + x.toString().split('.')[1]);
}
