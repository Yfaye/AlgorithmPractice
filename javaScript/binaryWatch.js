// 401. Binary Watch
// Total Accepted: 1836
// Total Submissions: 4340
// Difficulty: Easy
// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

// Each LED represents a zero or one, with the least significant bit on the right.


// For example, the above binary watch reads "3:25".

// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

// Example:

// Input: n = 1
// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
// Note:
// The order of output does not matter.
// The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
// The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
// Subscribe to see which companies asked this question

// Tags Backtracking Bit Manipulation
// Similar Problems (M) Letter Combinations of a Phone Number (E) Number of 1 Bits


/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
	var countBit = function(n){
		let count = 0;
		while (n) {
			n = n & (n-1);
			count++;
		}
		return count;

	};
	var ans = [];
	for (let hour = 0; hour < 12; hour++) {
		for (let minute = 0; minute < 60; minute++) {
			if (countBit(hour) + countBit(minute) === num) {
				let tmp = "" + hour + ":";
				if (minute < 10) {
					tmp += ("0" + minute);
				} else {
					tmp += minute;
				}
				ans.push(tmp);
			}
		}
	}
	return ans;
    
};

//本题初见，简直麻了爪子。一方面是自己解题思路不系统，一方面是对dfs，backtracking这类算法还是心虚。看见这个easy级别的题，第一反应就是怎么用dfs构建呢？感觉用dfs构建还是很难啊。
//这题确实可以用dfs构建，但是如果用dfs来解，在leetcode上面，应该算一道medium难度的题目。
//为什么说基础知识不扎实呢，这道binarywatch，总共就十个位置可以填数，也就是所有可能也就是 2^10， 1024个，这里面还有些不合适的。所以，解法应该考虑吧0到1024的所有数的2进制列一遍，把符合条件的时间挑出来即可。
//- 1的个数满足题目所给的num；
//- 前四位读出的值小于12
//- 后六位读出的值小于59

//附上牛人很好看的python代码：
/*
class Solution(object):
    def readBinaryWatch(self, num):
        """
        :type num: int
        :rtype: List[str]
        """
        ans = []
        for x in range(1024):
            if bin(x).count('1') == num:
                h, m = x >> 6, x & 0x3F
                if h < 12 and m < 60:
                    ans.append('%d:%02d' % (h, m))
        return ans
*/

//甚至还有一种反向解法，枚举小时h和分钟m，然后判断二进制1的个数是否等于num，考虑js用后一种办法来做比较顺手。上面代码就是用后一种方法写的。

//以上代码已AC，这题主要是由于解题思路不系统引起的，竟然没有首先考虑最简单的生成然后排除的解法。

//比较自己的js代码，和牛人的python代码，真的很想用python刷题啊有木有！！！

/*
class Solution(object):
    def readBinaryWatch(self, num):
        """
        :type num: int
        :rtype: List[str]
        """
        ans = []
        for h in range(12):
            for m in range(60):
                if (bin(h)+ bin(m)).count('1') == num:
                    ans.append('%d:%02d' % (h, m))
        return ans


*/

//又去膜拜了别人的dfs解法，虽然没有复杂到哪里去，但是好多自己就是写不出来：（
//下面分析下这个dfs有多巧妙：传递了4个参数： ans，num都是必须的，然后用i表示当前在决定哪一位，用长度为2的int数组表示小时和分钟的数值。
//接下来就是如果这个位置放1，就dfs(ans, k-1, i+1, hhmm), 如果这个位置放0，就把之前的减去，然后dfs(ans, k, i+1, hhmm)。

//写得实在是太精彩了！！！！
/*
    public List<String> readBinaryWatch(int num) {
        List<String> ans = new LinkedList<>();
        dfs(ans, num, 0, new int[2]);
        return ans;
    }
    void dfs(List<String> ans, int k, int i, int[] hhmm) {
        if (i == 10 || k == 0) {
            if (k == 0 && hhmm[0] < 12 && hhmm[1] < 60) 
                ans.add(String.format("%d:%02d", hhmm[0], hhmm[1]));
            return;
        }
        int idx = i < 4 ? 0 : 1;
        int val = 1 << (i < 4 ? i : i - 4);
        hhmm[idx] += val;
        dfs(ans, k - 1, i + 1, hhmm);
        hhmm[idx] -= val;
        dfs(ans, k, i + 1, hhmm);
    }
*/