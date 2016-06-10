/* 13. Roman to Integer
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
From Wiki
any of the letters representing numbers in the Roman numerical system: 
I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1,000. 
In this system, 
a letter placed after another of greater value adds (thus XVI or xvi is 16), 
whereas a letter placed before another of greater value subtracts (thus XC or xc is 90).
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	//corner case
	if (s === undefined || s.length === 0 ) {
		return false;
	}
	var sInUpperCase = s.toUpperCase();
	var roman = "IVXLCDM";
    var romanArr = {
    	'I': 1,
    	'V': 5,
    	'X': 10,
    	'L': 50,
        'C': 100,
    	'D': 500,
    	'M': 1000
    };

    var result = 0;
    for (var i = 0; i < s.length ; i++) {
    	if (roman.indexOf(s.charAt(i)) === -1) {
    		console.log('invalid Roman input')
    		return false;
    	}
    	if (roman.indexOf(s.charAt(i)) >= roman.indexOf(s.charAt(i+1))) {
    		result = result + romanArr[s.charAt(i)];
    	} else {
    		result = result - romanArr[s.charAt(i)];
    	}
    }
    return result;
};

romanToInt("MCD");