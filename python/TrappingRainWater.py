# Trapping Rain Water

# Description
# Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

# Trapping Rain Water

# Example
# Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

# Challenge 
# O(n) time and O(1) memory

# O(n) time and O(n) memory is also acceptable.

# Tags 
# Two Pointers Forward-Backward Traversal Array

# Related Problems 
# Medium Container With Most Water 40 %
# Hard Trapping Rain Water II 21 %

class Solution:
    # @param heights: a list of integers
    # @return: a integer
    def trapRainWater(self, heights):
        # write your code here
        left = 0
        right = len(heights) - 1
        res = 0

        if left >= right:
        	return res

        leftH = heights[left]
        rightH = heights[right]

        while left < right:
        	if leftH < rightH:
        		left += 1
        		if leftH > heights[left]:
        			res += leftH - heights[left]
        		else:
        			leftH = heights[left]
        	else:
        		right -= 1
        		if rightH > heights[right]:
        			res += rightH = heights[right]
        		else:
        			rightH = heights[right]

        return res


        	
 

