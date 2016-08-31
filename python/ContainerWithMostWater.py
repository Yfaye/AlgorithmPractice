# Container With Most Water

# Description
# Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

# Notice
# You may not slant the container.

# Example
# Given [1,3,2], the max area of the container is 2.

# Tags 
# Two Pointers Array

# Related Problems 
# Medium Trapping Rain Water 35 %

class Solution:
    # @param heights: a list of integers
    # @return: an integer
    def maxArea(self, heights):
        # write your code here
        left = 0
        right = len(heights) - 1
        maxArea = 0

        while (left < right):
        	leftH = heights[left]
        	rightH = heights[right]
        	area = min(leftH, rightH) * (right - left)
        	if area > maxArea:
        		maxArea = area
        	if (leftH <= rightH):
        		left += 1
        	else:
        		right -= 1
        return maxArea

# 这一题刚一拿到，也是有点懵，但是后来一想，maxArea = maxX * maxY
# 我其实就可以从maxX -> 1 遍历，寻找到在特定X长度下，Y的最大值。
# 再对应到这一题，也就是，先开始maxX，是取数组最左和最右的两条线，然后容器的高度是由最小的那根决定的，所以是maxX * min(left, right)
# 接下来，要考虑缩短一格X， 然后Y 的变化了，缩短一格的时候要考虑是从哪一头开始缩，
# 因为高的变化了，不会使整个容量再增加，因为已经由最低的那根决定了，所以要缩短x要从低的那一头开始缩短，如果left++后，高度比当前left高，那整体容量还有可能增加， 如果比当前left低的话，就再left++看看，有没有可能找到比当前left高的
# 接下来，在再缩短X的过程中，发现，左右指针只有找到比他们自己更高的bar才有可能升级容量，不然容量就是一开始左右指针里面最低的那个 * 左右指针的差了

# 上面代码AC了，Yeah！终于AC了一回……
# 而且根据上面细致地分析，应该还有加速的办法，就是如果下一个left或者下一个right都小于当前的，就可以直接跳过，不用考虑了


