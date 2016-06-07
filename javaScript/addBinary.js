/*
67. Add Binary
Total Accepted: 87683 Total Submissions: 314575 Difficulty: Easy

Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100". 
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var aReversedArr = a.split('').reverse().map(function(c){return parseInt(c);});
    var bReversedArr = b.split('').reverse().map(function(c){return parseInt(c);});
    var sumReversedArr = [];
    console.log(aReversedArr);
    console.log(bReversedArr);

    var aLength = aReversedArr.length;
    var bLength = bReversedArr.length;
    console.log(aLength);
    console.log(bLength);
    var i = 0;
    var carry = 0;
    for (; i < aLength && i < bLength; i++) {
    	 var tmp = aReversedArr[i] + bReversedArr[i] + carry;
    	 sumReversedArr[i] = tmp % 2;
    	 carry = Math.floor(tmp/2);
    }
   console.log(i);
    while (i >= aLength && i < bLength) {
    	tmp = bReversedArr[i] + carry
 		sumReversedArr[i] = tmp % 2;
    	carry = Math.floor(tmp/2);
    	i++;
      console.log(tmp);
      console.log(i);
    }
    while (i >= bLength && i < aLength) {
    	tmp = aReversedArr[i] + carry
 		sumReversedArr[i] = tmp % 2;
    	carry = Math.floor(tmp/2);
    	i++;
      console.log(tmp);
      console.log(i);
    }
    while (carry > 0) {
      console.log(carry);
      tmp = carry;
      sumReversedArr[i] = tmp % 2;
      carry = Math.floor(tmp/2);
      i++;
    }
    return sumReversedArr.reverse().join('');
};

addBinary('11000','100');

/*
1100
*/
/*
1100
*/
/*
1100
*/
/*
1100
*/
/*
1100
*/
/*
1100
*/