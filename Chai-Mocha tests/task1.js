/*
Некоторые необходимые, на мой взгляд, поъяснения.

Проверить, является ли число целым можно множеством разных способов. Несмотря на то,
в официальном "решении" использутеся конструкция Math.round(n) != n, мне кажется, что более простым
способом является проверка типа (n % 1 === 0). Быстро, просто и не требует дополнительного кода (например, polyfill).
В коде для краткости я использую !(n % 1).
*/

// вариант 1

function pow(x, n) {
	var result = NaN;
	if (n > 0 && !(n % 1)){
		result = 1;
		for (var i = 0; i < n; i++) {
			result *= x;
		}
	}
	return result;
}

// вариант 2

/*
Естественно, первый вариант выглядит предподчтительнее.
Добавил второй вариант в качестве одного из возможных решений.
*/

function pow(x, n) {
	var checkDegree = n > 0 && !(n % 1);
	function raiseNumber(){
		var result = 1
  		for (var i = 0; i < n; i++) {
    			result *= x;
  		}
  		return result;
  	}
  	return (checkDegree) ? raiseNumber() : NaN;
}