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
    if (sLen === 0) {
        return true;
    }
    if (s.charAt(0) === ')' || s.charAt(0) === '}' || s.charAt(0) === ']' ) {
        return false;
    }
    
    //check
    var stack = [];
    stack.push(s.charAt(0));
    
    for (var i = 1; i < sLen; i++) {
        if (stack.length === 0 &&　(s.charAt(i) === ')' || s.charAt(i) === '}' || s.charAt(i) === ']')) {
            return false;
        }
        if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[' ) {
            stack.push(s.charAt(i));
        }
        if (s.charAt(i) === ')' && stack.length > 0) {
            if (stack[stack.length - 1] === '(' ) {
                stack.pop();
            } else {
                return false;
            }
        }
        if (s.charAt(i) === '}' && stack.length > 0) {
            if (stack[stack.length - 1] === '{' ) {
                stack.pop();
            } else {
                return false;
            }
        }
        if (s.charAt(i) === ']' && stack.length > 0) {
            if (stack[stack.length - 1] === '[' ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
};

isValid("[])");
