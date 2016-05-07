/*231. Power of Two   My Submissions QuestionEditorial Solution
Total Accepted: 72163 Total Submissions: 196594 Difficulty: Easy
Given an integer, write a function to determine if it is a power of two.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    var nArr = n.toString(2).split('');
    
    if (nArr[0] === '1'){
        return nArr.slice(1).every(function(n){return n === '0'})
    }
    return false;
};