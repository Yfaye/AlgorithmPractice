/*371. Sum of Two Integers  QuestionEditorial Solution  My Submissions
Total Accepted: 25986
Total Submissions: 50005
Difficulty: Easy
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
	if (a === 0 ) {
		return b;
	}
	if (b === 0) {
		return a;
	}
	while (b !== 0) {
		int carry = a & b;
		a = a ^ b;
		b = carry << 1;
	}
	return a;
    
};
// 这题不用加号求和，自然想到了位运算

// 查到的位运算方法有： & 同为1才为1， 所以 & 可以用来保存 carry
// ^ (异或) 又叫不进位加法， 规则是有一个为1就为1： 所以可以和carry配合来用.

// 具体逻辑用网上大神的解答如下
/*
For this, problem, for example, we have a = 1, b = 3,

In bit representation, a = 0001, b = 0011,

First, we can use "and"("&") operation between a and b to find a carry.

carry = a & b, then carry = 0001

Second, we can use "xor" ("^") operation between a and b to find the different bit, and assign it to a,

Then, we shift carry one position left and assign it to b, b = 0010.

Iterate until there is no carry (or b == 0)
*/

// 下面是大神列出来的其他拓展
// Iterative
public int getSubtract(int a, int b) {
	while (b != 0) {
		int borrow = (~a) & b;
		a = a ^ b;
		b = borrow << 1;
	}
	
	return a;
}
// Recursive
public int getSum(int a, int b) {
	return (b == 0) ? a : getSum(a ^ b, (a & b) << 1);
}

// Recursive
public int getSubtract(int a, int b) {
	return (b == 0) ? a : getSubtract(a ^ b, (~a & b) << 1);
}

// Get negative number
public int negate(int x) {
	return ~x + 1;
}

public int getProduct(int a, int b) {
    if (a==0 || b==0) return 0;
    int result = 0;
    while (b != 0) {
        if ((b & 1) != 0) {
            result = getSum(a,result);
        }
        a <<= 1;
        b >>>= 1;
    }
    return result;
}