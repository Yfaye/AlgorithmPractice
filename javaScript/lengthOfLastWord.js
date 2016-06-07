/*58. Length of Last Word
Total Accepted: 96101 Total Submissions: 324988 Difficulty: Easy

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given s = "Hello World",
return 5. 
*/

/**
 * @param {string} s
 * @return {number}
 */

 /* VERSION 1 FAILED ON CASE "a " , this is supposed to return 1 instead of 0
var lengthOfLastWord = function(s) {
	//corner case
	if (s === undefined || s.length === 0) {
		return 0;
	}

	var right = s.length - 1;
	var count = 0;
	//remove the space at the end
	while (right >= 0 && s.charAt(right) === ' ') {
		right--;
	}
	//start counting
    while (right >= 0 && s.charAt(right) !== ' ') {
    		count++;
			right--
    }
    return count;
};

lengthOfLastWord("Hello World     ");
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //corner case
    if (s === undefined || s.length === 0) {
        return 0;
    }
    
    //remove the space
    var tail = s.length - 1;
    while (tail >= 0 && s.charAt(tail) === ' ') {
        tail--;
    }
    
    //starting from the last non-space character
    var count = 0;
    while (tail >= 0 && s.charAt(tail) !== ' ') {
        count++;
        tail--;
    }   
    return count;
};