/*
мой вариант содержания test.js для задания 3 с использованием цикла 
*/

describe("pow", function() {
	describe("Возводит x в степень n", function() {

		function test(x){
			var result = (x === 1) ? 5 : (x === 2) ? 25 : (x === 3) ? 125 :
			false;
			it("5 в степени " + x + " равно " + result, function() {
	    			assert.equal(pow(5, x), result);
	  		});
		}

		for (var i = 1; i <= 3; i++){
			test(i);
		}
	});
});
