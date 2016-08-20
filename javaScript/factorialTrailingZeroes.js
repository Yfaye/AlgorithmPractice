/*172. Factorial Trailing Zeroes  QuestionEditorial Solution  My Submissions
Total Accepted: 68342
Total Submissions: 201921
Difficulty: Easy
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    var count = 0;

    while (n > 0) {
    	count += Math.floor(n/5);
    	n = Math.floor(n/5);
    }

    return count;
};