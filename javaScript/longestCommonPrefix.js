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
    if (head.length >= strs.length) {
    	return lcp;
    }
    
    

    
};