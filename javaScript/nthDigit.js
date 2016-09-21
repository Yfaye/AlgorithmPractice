// 400. Nth Digit  QuestionEditorial Solution  My Submissions
// Total Accepted: 1625
// Total Submissions: 5577
// Difficulty: Easy
// Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

// Note:
// n is positive and will fit within the range of a 32-bit signed integer (n < 231).

// Example 1:

// Input:
// 3

// Output:
// 3
// Example 2:

// Input:
// 11

// Output:
// 0

// Explanation:
// The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.


// Tag Math
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
	let base = 9;
	let digits = 1;
	while (n - digits*base > 0) {
		n -= digits * base;
		base *= 10;
		digits++;
	}
	let num = 10 * (digits - 1) + n / digits;  // 如果不是用循环构建数字，这里应该用Math.pow(10,(digits-1))
	let targetD = n % digit;
	return  Math.floor(num / (digit - targetD) * 10);
    
};

//本题思路的方向是对的，先找到n属于哪个区间，

// 1   1-9
// 2   10-99
// 3   100-999
// 4   1000-9999
// 5   10000-99999
// 6   100000-999999
// 7   1000000-9999999
// 8   10000000-99999999
// 9   100000000-999999999
// 10  1000000000-9999999999 //这个区间已经超过2^31：2147483648  js里面1<<31会得到 -2147483648

// 再找到n是区间里的哪个数， 再找到n是这个数的第几位，返回这一位即可。

下面是已经AC的代码：
var findNthDigit = function(n) {
  	let base = 9;
	let digits = 1;
	while (n - digits*base > 0) {
		n -= digits * base;
		base *= 10;
		digits++;
	}
    if (digits === 1) {
        return n;
    }
    let num;
	let targetD = n % digits;
	if (targetD === 0) {
	   targetD = digits;
	   num = Math.pow(10,digits-1) + Math.floor(n / digits) - 1;
	}else{
	   num = Math.pow(10,digits-1) + Math.floor(n / digits);
	}
	
	//console.log(num);
	//console.log(targetD);
	
	for (let i = targetD; i < digits; i++) {
	    num = Math.floor(num / 10);
	}
	return  num%10;  
};

