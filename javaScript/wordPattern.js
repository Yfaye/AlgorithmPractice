// 290. Word Pattern  
// Total Accepted: 49597
// Total Submissions: 160678
// Difficulty: Easy
// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

// Credits:
// Special thanks to @minglotus6 for adding this problem and creating all test cases.

// Tags Hash Table
// Similar Problems (E) Isomorphic Strings (H) Word Pattern II
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	if (pattern === null || pattern === undefined || str === null || str === undefined) {
		return false;
	}

	pArr = pattern.split(""); // if pattern === "", 这里的结果是Array[]
	sArr = str.split(" ");// if str === "", 这里的结果是Array[""]
	var pTos = new Map();
	var sTop = new Map();

	pLen = pArr.length;
	sLen = sArr.length;

	if (pLen !== sLen) {
		return false;
	}

	for(var i = 0; i < pLen; i++) {
		if (!pTos.has(pArr[i]) && !sTop.has(sArr[i])){
			pTos.set(pArr[i],sArr[i]);
			sTop.set(sArr[i],pArr[i]);
		} else{
			if (pTos.get(pArr[i]) !== sArr[i] || sTop.get(sArr[i]) !== pArr[i]) {
				return false;
			}
		}
	}
	return true;
    
};
// 这题跟那个isomorphic string 一样，两个字符串之间是1对1强对应的关系，也就是从pattern到str，A的对应的是B的，反过来从str到pattern，B也必须对应A，所以应该是一个解法
// 上面代码已AC