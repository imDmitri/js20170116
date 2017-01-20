function pow(x, n) {
	var result = NaN;
	if (n > 0 && !(n % 1)){
		result = 1;
		for (var i = 0; i < n; i++) {
			result *= x;
		}
	} else if (x !==0 && !n) {
		result = 1;
	}
	return result;
}

// исправить!

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

describe("pow", function() {

	describe("возводит x в степень n", function() {

		function makeTest(x) {
		  var expected = x * x * x;
		  it("при возведении " + x + " в степень 3 результат: " + expected, function() {
		    assert.equal(pow(x, 3), expected);
		  });
		}

		for (var x = 1; x <= 5; x++) {
		  makeTest(x);
		}
	});

	it("при возведении в отрицательную степень результат NaN", function() {
		assert(isNaN(pow(2, -1)), "pow(2, -1) возвращает NaN");
	});

	it("при возведении в дробную степень результат NaN", function() {
		assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) возвращает NaN");
	});

	describe("любое число, кроме нуля, в нулевой степени равно 1", function(){
		function makeTest(x) {
	  		it("возведение " + x + "в нулевую степень дает 1", function() {
	    		assert.equal(pow(x, 0), 1);
	  		});
		}

		for (var x = -5; x <= 5; x+=2) {
		  makeTest(x);
		}
	});

	it("ноль в нулевой степени равно NaN", function() {
		assert(isNaN(pow(0, 0)), "pow(0, 0) возвращает NaN");
	});

});
