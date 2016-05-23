/*Total Accepted: 88930 Total Submissions: 238435 Difficulty: Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()" 
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	var parenthesis = ['(',')'];
	var results = [];
	var path = [];

	var isValid = function(path){
		var stack = [];
		if (path[0] === ')') {
			return false;
		}
		stack.push(path[0]);
		for (var i = 1; i < path.length; i++) {
      	if (path[i] === '(') {
				stack.push(path[i]);
			} else if (stack.length > 0){
				stack.pop();
			} else {
				return false;
			}
		}
		if (stack.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	var bfsHelper = function(n, parenthesis, results, path, pos) {
		//base case
		if (pos === 2*n) {
			if (isValid(path.slice(0))) {
				results.push(path.slice(0).join(''));
			}			
			return;
		}

		//recursive case
		for (var i = 0; i < 2; i++) {
			path.push(parenthesis[i]);
			arguments.callee(n, parenthesis, results, path, pos + 1);
			path.pop(path.length - 1);
		}
	}
    
    bfsHelper(n, parenthesis, results, path, 0);
	  console.table(results);
    return results;
};
generateParenthesis(3);
/*
((((((,(((((),(((()(,(((()),((()((,((()(),((())(,((())),(()(((,(()((),(()()(,(()()),(())((,(())(),(()))(,(()))),()((((,()(((),()(()(,()(()),()()((,()()(),()())(,()())),())(((,())((),())()(,())()),()))((,()))(),())))(,())))),)(((((,)((((),)((()(,)((()),)(()((,)(()(),)(())(,)(())),)()(((,)()((),)()()(,)()()),)())((,)())(),)()))(,)()))),))((((,))(((),))(()(,))(()),))()((,))()(),))())(,))())),)))(((,)))((),)))()(,)))()),))))((,))))(),)))))(,))))))
*/


/*
((())),(()()),(())(),()(()),()()()
*/