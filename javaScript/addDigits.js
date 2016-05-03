/*258. Add Digits
Total Accepted: 65908 Total Submissions: 137210 Difficulty: Easy

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime? 
*/

/**
 * @param {number} num
 * @return {number}

 var addDigits = function(num) {

	var result = 0;

	while (num > 0) {
		result += num % 10;
		num = parseInt(num / 10);
	}

	while (result >= 10) {
		result = addDigits(result);
	}
	
	return result;
    
};

addDigits(198);
*/
/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
 	return (num % 9);
 }

addDigits(12345);
