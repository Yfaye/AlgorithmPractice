/*9. Palindrome Number  QuestionEditorial Solution  My Submissions
Total Accepted: 141859
Total Submissions: 432275
Difficulty: Easy
Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    while(x >= 10) {
        var last = x % 10;
        var first = x;
        var digits = 0;
        while (first >= 10) {
            first = Math.floor(first/10);
            digits++;
        }
        if (last !== first) {
            return false;
        }
        x = Math.floor((x - first*Math.pow(10,digits))/10) ; // 这里无法处理首尾相同，砍掉后由0开始的情况
        console.log(x);
    }
    return true;

};

// 以上方法在这个case会报错： 1000021，这样去掉首尾后，只剩下2，就return True了，在这种case下，如果保证正确呢, 只能用题目剧透的翻转整数法，比较按翻转的次序建立的整数是不是与原整数相同
// 别人的代码为什么这么聪明这么聪明T_T!

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var origin = x;
    var reverse = 0;
    while (x > 0) {
    	reverse = reverse * 10 + x % 10;
    	x = Math.floor(x / 10);
    }

    return reverse === origin;

};