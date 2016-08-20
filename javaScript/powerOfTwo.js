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

// 写了这么多，而且还以为用到了powerofTwo位运算的有点，结果高手一个return 就搞定了，看得我想哭……
var isPowerOfTwo = function(n) {
return num > 0 && (num & (num - 1)) === 0
};

// 顺便下面把powerOfThree 还有 powerOfFour的一句话解法和解释贴在下面
var isPowerOfThree = function(n) {
     // 1162261467 is 3^19,  3^20 is bigger than int  
     return ( n>0 &&  1162261467%n===0);  // Since 3 is a prime number, If any part of the number not belonging to the power of three, the modulo will be non-zero.
}; 

var isPowerOfFour = function(num) {
    return num > 0 && (num & (num - 1)) === 0  && (num - 1) % 3 === 0; // or return (num > 0) && ((num & (num - 1)) == 0) && ((num & 0xAAAAAAAA) == 0);
};

//First, Any number passes "n^(n-1)==0" must be powers of 2.
//Second, all numbers above could be further categorized to 2 class. A: all numbers that are 2^(2k+1) and B: all numbers that 2^(2k).
//Third, we could show that 2^(2k+1)-1 could not pass the test of (n-1)%3==0. (by induction) So all A are ruled out, leaving only B, which is power of 4.

  