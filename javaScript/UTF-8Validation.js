// 393. UTF-8 Validation  QuestionEditorial Solution  My Submissions
// Total Accepted: 2562
// Total Submissions: 7732
// Difficulty: Medium
// A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:

// For 1-byte character, the first bit is a 0, followed by its unicode code.
// For n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1 bytes with most significant 2 bits being 10.
// This is how the UTF-8 encoding would work:

//    Char. number range  |        UTF-8 octet sequence
//       (hexadecimal)    |              (binary)
//    --------------------+---------------------------------------------
//    0000 0000-0000 007F | 0xxxxxxx
//    0000 0080-0000 07FF | 110xxxxx 10xxxxxx
//    0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
//    0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
// Given an array of integers representing the data, return whether it is a valid utf-8 encoding.

// Note:
// The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data.

// Example 1:

// data = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.

// Return true.
// It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.
// Example 2:

// data = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.

// Return false.
// The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
// The next byte is a continuation byte which starts with 10 and that's correct.
// But the second continuation byte does not start with 10, so it is invalid.
// Subscribe to see which companies asked this question

// Tags Bit Manipulation

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
	var bitCount = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 247 ) {
            return false;
        }
        if (data[i] >= 192) {
        	if (bitCount !== 0) {
        		return false;
        	}
            bitCount = 1;
            if (data[i] >= 224) {
                bitCount = 2;
            }
            if (data[i] >= 240) {
                bitCount = 3;
            }
        } else if (data[i] >= 128 ){
        	if (bitCount !== 0) {
              bitCount--;       		
        	} else {
        		return false;
        	}
        } else if (data[i] < 128) { //这里改成else，也能AC
        	if (bitCount !== 0) {
        		return false;
        	}
        }
        
    }
    return bitCount === 0; // 这里要排除情况bitCount还有，但是后面跟的数没了的情况
    
};

//这题就是用来鉴别有没有计算机基础知识的吧？像我这种菜鸟，光读题就已经读晕了……后来各种查看解题报告，才终于明白，原来题目意思是，给一个整数数组，只看后8位，判断它是不是有效的UTF-8编码。
//关键就是： 
// 1，把每个整数转换成8位的二进制码；
// 2. 如果这个二进制码是0开头的，就continue;
// 3. 如果这个二进制码是1开头的，就读有多少个1，表示后面有多少个得是10开头的


//下面是网上高人的python解法, 唉，看都看不懂
/*
class Solution(object):
    def validUtf8(self, data):
        """
        :type data: List[int]
        :rtype: bool
        """
        masks = [0x0, 0x80, 0xE0, 0xF0, 0xF8]
        bits = [0x0, 0x0, 0xC0, 0xE0, 0xF0]
        while data:
            for x in (4, 3, 2, 1, 0):
                if data[0] & masks[x] == bits[x]:
                    break
            if x == 0 or len(data) < x:
                return False
            for y in range(1, x):
                if data[y] & 0xC0 != 0x80:
                    return False
            data = data[x:]
        return True
*/

//上面答案已经AC了，但是因为没有用很多位操作，所以感觉代码不是那么酷……
		