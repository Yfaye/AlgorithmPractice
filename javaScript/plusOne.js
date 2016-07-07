/*66. Plus One  QuestionEditorial Solution  My Submissions
Total Accepted: 109026
Total Submissions: 315227
Difficulty: Easy
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var rDigits = digits.reverse();
    var carry = 0;
    carry = Math.floor((rDigits[0] + 1 + carry)/10);
    rDigits[0] = (rDigits[0] + 1 + carry) % 10;
    for (var i = 1; i <digits.length; i++) {
        carry = Math.floor((rDigits[i] + carry)/10);
        rDigits[i] = (rDigits[i] + carry) % 10;
    }
    while (carry >= 10) {
        rDigits.push(Math.floor(carry)/10);
        carry = Math.floor(carry)/10;
    }
    return rDigits.reverse();
    
};