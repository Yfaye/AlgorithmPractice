/*14. Longest Common Prefix My Submissions QuestionEditorial Solution
Total Accepted: 103810 Total Submissions: 363540 Difficulty: Easy
Write a function to find the longest common prefix string amongst an array of strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var lcp = "";
    if (strs === undefined || strs.length === 0) {
        return lcp;
    }
    var head = [];
	var shortest = strs[0].length;
    for (var i = 0; i < strs.length; i++) {
    	if (shortest > strs[i].length) {
    		shortest = strs[i].length;
    	}
    	if (head.indexOf(strs[i].charAt(0)) === -1) {
    		head.push(strs[i].charAt(0));
    	}
    }
    if (head.length > 1) {
    	return lcp;
    }
    lcp = lcp + head[0];
    for (var m = 1; m < shortest; m++) {
    	for (var n = 0; n < strs.length - 1; n++) {
    		if (strs[n].charAt(m) !== strs[n+1].charAt(m)) {
    			return lcp;
    		}
    	}
    	lcp = lcp + strs[0].charAt(m);
    }
    return lcp;   
};

longestCommonPrefix(['aabb','aabbc','aabbccd']);

/*
aabb
*/