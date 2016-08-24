/*190. Reverse Bits  QuestionEditorial Solution  My Submissions
Total Accepted: 74049
Total Submissions: 251063
Difficulty: Easy
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer
*/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	var num = n;
	var binaryArr = num.toString(2).split("");
    
    var i = 0;
    var j = binaryArr.length - 1;

    while ( i < j) {
    	var tmp = binaryArr[i];
    	binaryArr[i] = binaryArr[j];
    	binaryArr[j] = tmp;
    	i++;
    	j--;
    }

    return parseInt(binaryArr.join(""),2);
};

//以上做法看起来是对的，但是答案却是错的，因为题目的一个要求是，不管什么数，最后转成的位数都是32位，所以1反转后会变成2的32次方，而如果按上面的算法，仍然还是1，因为它前面的所有0都被忽略不计了
//这题要用位操作，位操作是弱项T_T