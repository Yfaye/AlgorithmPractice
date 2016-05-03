/*17. Letter Combinations of a Phone Number  
Total Accepted: 78379 Total Submissions: 272911 Difficulty: Medium

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want. 
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var keyboard = [
    	['a','b','c'],
    	['d','e','f'],
    	['g','h','i'],
    	['j','k','l'],
    	['m','n','o'],
    	['p','q','r','s'],
    	['t','u','v'],
    	['w','x','y','z']
    ]

    var results = [];
    var path = [];

    var dfsHelper = function(keyboard, digits, results, path, pos) {
    	
    }
};