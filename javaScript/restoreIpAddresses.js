/*
93. Restore IP Addresses   My Submissions QuestionEditorial Solution
Total Accepted: 55574 Total Submissions: 236875 Difficulty: Medium
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)

*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
	var results = [];
  var path = [];
	//cornner case
	if (s === null || s === undefined) {
		return results;
	}

	if (s.length < 4 || s.length > 12) {
		return results;
	}
	
	//check valid IP section
	var isValid = function(s){
		if (s.charAt(0) === '0') {
			return s === '0';
		}
		return (s.valueOf() >= 0 && s.valueOf() <= 255);
	}
  //dfs function
	var dfsHelper = function(s, results, path, start){
		//base case
		if (path.length === 4) {
			if (start !== s.length ) {
				return;
			}
			results.push(path.slice(0).join('.'));
			return;
		}

		//recursive case
		for (var i = start; i < s.length && i < start + 3; i++) {
			var tmp = s.substring(start, i+1);
			if (isValid(tmp)) {
				path.push(tmp);
			  arguments.callee(s, results, path, i + 1);
			  path.pop(path.length - 1);
			}
		}
	};

	dfsHelper(s, results, path, 0);
	console.table(results);
	return results;   
};
restoreIpAddresses("0000");
/*
0.0.0.0
*/
restoreIpAddresses("25525511135");
/*
255.255.11.135,255.255.111.35
*/
