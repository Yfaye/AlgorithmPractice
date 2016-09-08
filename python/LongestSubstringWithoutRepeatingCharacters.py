# Longest Substring Without Repeating Characters

# Description
# Given a string, find the length of the longest substring without repeating characters.

# Example
# For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.

# For "bbbbb" the longest substring is "b", with the length of 1.

# Challenge 
# O(n) time

# Tags 
# String Two Pointers Hash Table
# Related Problems 
# Medium Longest Substring with At Most K Distinct Characters 22 %
class Solution:
    # @param s: a string
    # @return: an integer
    def lengthOfLongestSubstring(self, s):
        # write your code here
        if s == None or len(s) < 1:
            return 0
        map = {}
        maxL = 1
        i = 0
        
        while i < len(s):
            if len(map) >= maxL:
                maxL = len(map)
            if map.has_key(s[i]) == False:
                char = s[i]
                map[char] = True
                i += 1
            else:
                map={}  #本题的逻辑错误在这里，一旦发现重复，不应该把hash清零，而应该去掉第一个加入hash里面的值，再接着看，所以本题不能用hash单用hash做，还得加一个指针
                i += 1

        return max(maxL, len(map))

# 上述解法对aaaab这个case的计算会出错，只会计算出1， 而算不出2，逻辑错误见注释出

class Solution:
    # @param s: a string
    # @return: an integer
    def lengthOfLongestSubstring(self, s):
        # write your code here
        if s == None or len(s) < 1:
            return 0
        map = {}
        maxL = 1
        i = 0
        j = 0
        
        while i < len(s):
            if len(map) >= maxL:
                maxL = len(map)
            if map.has_key(s[i]) == False:
                char = s[i]
                map[char] = True
                i += 1
            else:
            	tmp = s[j]
                del map[tmp]
                j += 1

        return max(maxL, len(map))
# 以上解法已AC