/*
4. Greatest Common Divisor
Question: How would you find the greatest common divisor of two numbers?



function greatestCommonDivisor(m, n) {
	var u = +m, v = +n, t = v;
	
	while (v!= 0) {
		t = u % v;
		u = v;
		v = t;
	}
	return u;
}

greatestCommonDivisor(60, 15);

*/

function greatestCommonDivisor(a, b) {
	var divisor = 2;
	var greatestDivisor = 1;
	
  if (a < 2 || b < 2) {
	 return 1;
  }
	
	while (a >= divisor && b >= divisor) {
		if (a % divisor == 0 && b % divisor == 0) {
			greatestDivisor = divisor;
		}
		divisor++;
	}
	return greatestDivisor;
}

greatestCommonDivisor(20, 34);