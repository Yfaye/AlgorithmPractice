/*191. Number of 1 Bits  QuestionEditorial Solution  My Submissions
Total Accepted: 101856
Total Submissions: 270539
Difficulty: Easy
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var counter = 0;
  while (n > 0) {
    
  	if (n & 1 === 1) {
  		counter++;
  	}
  	n = n >> 1;
    console.log(n);
  } 
  return counter;
};
//Code Above would get wrong answer with the case below, reason is js would treat the number with signed integer
hammingWeight(2147483648);
//ECMAScript 整数有两种类型，即有符号整数（允许用正数和负数）和无符号整数（只允许用正数）。在 ECMAScript 中，所有整数字面量默认都是有符号整数，这意味着什么呢？
//有符号整数使用 31 位表示整数的数值，用第 32 位表示整数的符号，0 表示正数，1 表示负数。数值范围从 -2147483648 到 2147483647。

//The solution below is ACed
var hammingWeight = function(n) {
	var numStr = n.toString(2);
  var counter = 0;
  for (var i = 0; i < numStr.length; i++) {   
  	if (numStr.charAt(i) === "1") {
  		counter++;
  	}
  } 
  return counter;
};
