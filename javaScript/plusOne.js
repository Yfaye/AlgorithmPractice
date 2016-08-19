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
    if (digits === null || digits.length === 0) {
        return [1];
    } 
    var rDigits = digits.reverse();
    var carry = 0;
    carry = Math.floor((rDigits[0] + 1)/10);
    rDigits[0] = (rDigits[0] + 1) % 10;


    for (var i = 1; i <digits.length; i++) {
        var tmp = rDigits[i] + carry; // 这个很重要，Debug的时候才加上，不然[8,9]就会给出答案是[9,0]; 因为rDigits[i]+carry总有一个先变一个后变，而我们需要保留它们俩都不变的时候的值。
        carry = Math.floor(tmp/10);
        rDigits[i] = tmp % 10;
    }
    
    while (carry >= 1) {
        rDigits.push(carry % 10);
        carry = Math.floor(carry/10);
    }
    return rDigits.reverse();
    
};

// 已AC，但是这个解法有个问题，就是reverse了两次。虽然整体来说时间复杂度还是O(N)，但是如果能规避掉这两次reverse，也许速度能够加快

var plusOne = function(digits) {
    if (digits === null || digits.length === 0) {
        return [1];
    } 
    var last = digits.length - 1;
    var carry = 0;
    carry = Math.floor((digits[last] + 1)/10);
    digits[last] = (digits[last] + 1) % 10;


    for (var i = last-1; i >= 0; i--) {
        var tmp = digits[i] + carry; 
        carry = Math.floor(tmp/10);
        digits[i] = tmp % 10;
    }
    
    while (carry >= 1) {
        digits.unshift(carry % 10);
        carry = Math.floor(carry/10);
    }
    return digits;
    
};

// 这个不用reverse的解法也AC了，应该优先考虑这个解法，因为它少了两次reverse的开销。