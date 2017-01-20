function pow(x, n) {
	var checkDegree = n > 0 && Number.isInteger(n);
	
	function raiseNumber(){
		var result = 1
  		for (var i = 0; i < n; i++) {
    		result *= x;
  		}
  		return result;
  	}
	
  	return (checkDegree) ? raiseNumber() : NaN;
}
