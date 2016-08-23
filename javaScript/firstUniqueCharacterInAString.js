/*
387. First Unique Character in a String  QuestionEditorial Solution  My Submissions
Total Accepted: 2176
Total Submissions: 5116
Difficulty: Easy
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (var i = 0; i < s.length;i++) {
        if (s.slice(0,i).concat(s.slice(i+1)).indexOf(s.charAt(i)) === -1) {
            return i;
        }
    }
    return -1;
};

// 这道题AC是AC了，而且代码看着也蛮简洁，但这个时间复杂度其实高得吓人，是O（n3）吧，下面尝试讨论区提供的O（n）的解法

var firstUniqChar = function(s) {
	var dict = [];
	for (var ini = 0; ini < 26; ini++) {
		dict[ini] = 0;
	}
    for (var i = 0; i < s.length;i++) {
    	var dictIndex = s.charCodeAt(i) - s.charCodeAt('a'); // 'a'.charCodeAt(0);  显著bug， 花了1个小时
    		dict[dictIndex]++;
        }
    }

    for (var j = 0; j < s.length;j++) {
    	var dictIndex2 = s.charCodeAt(j) - s.charCodeAt('a'); //'a'.charCodeAt(0); 显著bug， 花了1个小时
    		if (dict[dictIndex2] === 1) {
    			return j;
    		}
    }
    return -1;

};