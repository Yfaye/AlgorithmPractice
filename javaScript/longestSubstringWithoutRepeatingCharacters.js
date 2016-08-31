// 3. Longest Substring Without Repeating Characters  QuestionEditorial Solution  My Submissions
// Total Accepted: 178499
// Total Submissions: 775857
// Difficulty: Medium
// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Subscribe to see which companies asked this question

// Hide Tags Hash Table Two Pointers String
// Hide Similar Problems (H) Longest Substring with At Most Two Distinct Characters
// Have you met this question in a real interview? Yes  No
// Discuss Pick One

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	//corner case
	if (s === null || s.length < 1) {
		return 0
	}

	var left = 0;
	var n = s.length;
	var map = new Map();
	var maxL = 0;

	while (left < n) {
		if (map.size > maxL) {
			maxL = map.size;
		}
		if (!map.has(s.charAt(left))) {
			map.set(s.charAt(left), left);
			left++;
		} else {
			//map.set(s.charAt(left), true);
			left = map.get(s.charAt(left)) + 1;
			map.clear();
		}
	}
	if (map.size > maxL) {
		maxL = map.size;
	}
	return maxL; 

    
};

// 读完题后的第一想法，就是从左开始维护做指针和hashmap，如果hashmap里面有了，就把左指针更新到当前
// 做完这题简直被打击到了……逻辑各种问题 T_T, 代码也很丑