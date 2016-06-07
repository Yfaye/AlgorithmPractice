/*
20. Valid Parentheses
Total Accepted: 112035 Total Submissions: 376497 Difficulty: Easy

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	//corner case
	if (s === undefined) {
		return false;
	}
	var sLen = s.length;
	if (sLen === 0 || s.charAt(0) === ')' || s.charAt(0) === '}' || s.charAt(0) === ']') {
		return false;
	}

	var stack = [];
	stack.push(s.charAt(0));
	for (var i = 1; i < sLen; i++) {
		console.log(stack);
		if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[' ) {
			stack.push(s.charAt(i));
		}
		if (s.charAt(i) === ')' && stack.length !== 0 ){
			if (stack[stack.length - 1] === '(') {
				stack.pop();
			} else {
				stack.push(s.charAt(i));
			}
			
		}
		if (s.charAt(i) === '}' && stack.length !== 0 && stack[stack.length - 1] === '{' ){
			stack.pop();
		}
		if (s.charAt(i) === ']' && stack.length !== 0 && stack[stack.length - 1] === '[' ){
			stack.pop();
		}
		console.log(stack);
	}
	if (stack.length !== 0) {
		return false;
	} else {
		return true;
	}   
};

isValid("(])");
/*
false
*/
/*
true
*/