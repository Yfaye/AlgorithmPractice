/*168. Excel Sheet Column Title  QuestionEditorial Solution  My Submissions
Total Accepted: 70969
Total Submissions: 309041
Difficulty: Easy
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 

*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = "";
      //corner case
    if (n < 1) {
        return "";
    }

    while (n > 0) {
    	var charcode = 65 + ((n-1) % 26);
      	result += String.fromCharCode(charcode);  		
    	n = Math.floor((n-1)/26);
    }

    return result.split("").reverse().join("");
};

// 以上代码AC了，但是很不理解，为什么用n-1就可以？之前用n的时候26这个位置老是出错因为 26 % 26 === 0 但是如果不用n-1，原题答案就是A，而不是Z，但凡26的倍数都会出错

// 网上参考的答案如下，但是还没有很好的消化理解
/* 用 n-1
Let's see the relationship between the Excel sheet column title and the number:

A   1     AA    26+ 1     BA  2×26+ 1     ...     ZA  26×26+ 1     AAA  1×26²+1×26+ 1
B   2     AB    26+ 2     BB  2×26+ 2     ...     ZB  26×26+ 2     AAB  1×26²+1×26+ 2
.   .     ..    .....     ..  .......     ...     ..  ........     ...  .............   
.   .     ..    .....     ..  .......     ...     ..  ........     ...  .............
.   .     ..    .....     ..  .......     ...     ..  ........     ...  .............
Z  26     AZ    26+26     BZ  2×26+26     ...     ZZ  26×26+26     AAZ  1×26²+1×26+26
Now we can see that ABCD＝A×26³＋B×26²＋C×26¹＋D＝1×26³＋2×26²＋3×26¹＋4

But how to get the column title from the number? We can't simply use the n%26 method because:

ZZZZ＝Z×26³＋Z×26²＋Z×26¹＋Z＝26×26³＋26×26²＋26×26¹＋26

We can use (n-1)%26 instead, then we get a number range from 0 to 25.

class Solution:
    # @return a string
    def convertToTitle(self, num):
        capitals = [chr(x) for x in range(ord('A'), ord('Z')+1)]
        result = []
        while num > 0:
            result.append(capitals[(num-1)%26])
            num = (num-1) // 26
        result.reverse()
        return ''.join(result)

*/ 

/* 不用n-1

let [βn βn-1 ... β1] be a n-char string, so the number it represents is βn * 26^(n-1) + βn-1 * 26^(n-1-1) + ... + β1 * 26^(1-1)

for example:
A B C = A * 26^2 + B * 26^1 + C * 26^0
= 1 * 26^2 + 2 * 26^1 + 3

Z Z Z = Z * 26^2 + Z * 26^1 + Z * 26^0
= 26 * 26^2 + 26 * 26^1 + 26

To convert the number into string, we can always get the "small part" which is less or equal than 26.
We can divide the number by 26 recursively, the tricky part here is that when the remainder is 0, it means that the "small part" is exactly 26, so you must subtract the current number by 1. Here is the code:

class Solution(object):
    def convertToTitle(self, n):
        """
        :type n: int
        :rtype: str
        """
        resStr = ""
        numMod = n # in  case that n is 0 or less
        while True:
            if numMod <= 0:
                break
            numMod, numRem = divmod(numMod, 26)
            if numRem == 0:
                numMod -= 1
                resStr = "Z"+resStr
            else:
                resStr = chr(64+numRem)+resStr #ord(A) = 65
                
        return resStr
*/

// 下面的解释相当明了了！
/*
The idea is this: suppose you have excel title 52 = AZ = A * 26 + Z * 1, where A = 1, Z = 26.
Now you shift each digit down i.e. A' = 0, and Z' = 25.
Then 52 = AZ = (A' + 1) * 26 + (Z' + 1) * 1.

So now you need to find A' and Z'. Z' = (52 - 1) % 26 = 25, which is (n-1)%26 in the code above.
Now you need to get A' + 1 from 26 * (A' + 1) + (Z' + 1)
If you simply do n/=26, Z' + 1 will give additional 1. So you will get n = 2 instead of n = 1.
To avoid this you do n = (n-1)/26
*/