/* 
131. Palindrome Partitioning   My Submissions QuestionEditorial Solution
Total Accepted: 64068 Total Submissions: 232120 Difficulty: Medium
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

  [
    ["aa","b"],
    ["a","a","b"]
  ]
 */
 /**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
	//corner case
	if (s === null || s === undefined) {
		return [];
	}

	if (s.length < 2) {
		return [s];
	}
    
    //initialize
    var results = [];
    var path = [];

    var isPalindrome = function(s) {
    	var left = 0;
    	var right = s.length - 1;

    	while (left < right) {
    		if (s.charAt(left) !== s.charAt(right)) {
    			return false;
    		}
    		left++;
    		right--;
    	}
    	return true;
    }

    var dfsHelper = function(s, results, path, start){
    	//base case
    	if (start === s.length) {
    		results.push(path.slice(0));
    		return;
    	}

    	//recursive case
    	for (var i = start; i < s.length; i++) {
    		var tmp = s.substring(start, i + 1);
    		if (!isPalindrome(tmp)) {
    			continue;
    		}
    		path.push(tmp);
    		arguments.callee(s, results, path, i+1);
    		path.pop(path.length - 1);
    	}
    }

    dfsHelper(s, results, path, 0);
    console.log(results);
    return results;
};

partition('ab');
