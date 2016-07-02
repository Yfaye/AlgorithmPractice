/*91. Decode Ways
Total Accepted: 74056 Total Submissions: 415222 Difficulty: Medium

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2. */


// 问题的解：一个值 - 解码的方法数
// 目标函数：allWays(string.length)
// 约束条件：二位数的code范围:[10,26]
// Debug前的递推方程：f(k) = (f(k-1) + f(k-2)) || 其中string.charAt(k-2) 到 string.charAt(k) 的范围必须在 10 - 26之间
// Debug之后，发现递推方程和约束方程都想错了。如果把i位作为一个数字来考虑，f(i) === f(i-1)， 这里要考虑如何处理0。 如果把i位作为两个数字来考虑，其实只要看当前i字符和前一个字符是否在合法范围内[1-26], 在，则需要加上f(i-2).

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
	//corner case
	if (s === null || s.length === 0) {
		return 0;
	}
	/* This is wrong, it could contain 0
	var validStr = function(str) {
		var reg = /^[1-9a-zA-Z]*$/;
		var regTestRes = reg.test(str);
		return regTestRes;
	}

	if (validStr(s) === false) {
		return 0;
	}*/
	if (s.length < 2 && s.charAt(0) !== "0") {
		return 1;
	}

	//init
	var decodeWays = [];
	
	if (s.charAt(0) !== '0') {
	    decodeWays[0] = 1;	    
	} else {
	    decodeWays[0] = 0;
	}

	decodeWays[1] = 1;
	var tempOneDigit = parseInt(s.charAt(1));
	if (tempOneDigit > 0) {
		decodeWays[1] = decodeWays[0];
	} else {
		decodeWays[1] = 0;
	}
	var tempTwoDigits = parseInt(s.substr(0,2),10);
	if ( tempTwoDigits >= 10 && tempTwoDigits <= 26 ) {
		decodeWays[1] += 1;
	}

	//DP
	for (var i = 2; i < s.length; i++) {
		var oneDigit = parseInt(s.charAt(i));
		if (oneDigit > 0) {
			decodeWays[i] = decodeWays[i-1];	
		} else {
			decodeWays[i] = 0;
		}			
		var twoDigits = parseInt(s.substr(i-1,2),10);
		if(twoDigits >= 10 && twoDigits <= 26){
			decodeWays[i] += decodeWays[i-2];
		}
	}
	
	return decodeWays[s.length-1];
};

numDecodings('10');