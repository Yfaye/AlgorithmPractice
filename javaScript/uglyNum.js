/*263. Ugly Number  QuestionEditorial Solution  My Submissions
Total Accepted: 63894
Total Submissions: 171012
Difficulty: Easy
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
*/
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    //corner case
    if (num <= 0) {
        return false 
    }
    
    var uglyArr = [2,3,5];
    for (var i = 0; i < uglyArr.length; i++) {
        while (num % uglyArr[i] === 0) {
            num /= uglyArr[i];
        }
    }
    
    return (num === 1);
};