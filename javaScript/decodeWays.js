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

/**
 * @param {string} s
 * @return {number}
 */
 // 问题的解：一个值 - 解码的方法数
 // 目标函数：allWays(string.length)
 // 约束条件：二位数的code范围:[10,26]
 // 递推方程：f(k) = (f(k-1) + 1 ) + (f(k-2) + 1) || 其中string.charAt(k-2) 到 string.charAt(k) 的范围必须在 10 - 26之间
var numDecodings = function(s) {
	//corner case
	if (s === null || s.length === 0) {
		return 0;
	}
	if (s.length < 2) {
		return 1;
	}

	//init
	var decodeWays = [];
	decodeWays[0] = 1;
	decodeWays[1] = 1;
	var temp = parseInt(s.slice(0,2),10);
	console.log(temp);
	if ( temp >= 10 && temp <= 26 ) {
		decodeWays[1] = 2;
	}

	//DP
	for (var i = 2; i < s.length; i++) {
		var twoStr = parseInt(s.slice(i-2,2),10);
		console.log(twoStr);
		if (twoStr >= 10 && twoStr <= 26) {
			decodeWays[i] = decodeWays[i-1] + decodeWays[i-2];
		} else {
			decodeWays[i] = decodeWays[i-2];
		}
	}

	return decodeWays[s.length - 1];
};

numDecodings('1212');

/*
1
*/
/*
1
*/
/*
3
*/
/*
3
*/
/*
2
*/
/*
2
*/
/*
2
*/