# Merge Intervals

# Description
# Given a collection of intervals, merge all overlapping intervals.

# Example
# Given intervals => merged intervals:

# [                     [
#   [1, 3],               [1, 6],
#   [2, 6],      =>       [8, 10],
#   [8, 10],              [15, 18]
#   [15, 18]            ]
# ]
# Challenge 
# O(n log n) time and O(1) extra space.

# Tags 
# LinkedIn Sort Array Google

# Related Problems 
# Medium Number of Airplanes in the Sky 23 %
# Easy Insert Interval 22 %
 


"""
Definition of Interval.
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    # @param intervals, a list of Interval
    # @return a list of Interval
    def merge(self, intervals):
        # write your code here
        orderedIntervals = sorted(intervals, key = lambda x:(x.start, x.end))

        for i,interval in enumerate(orderedIntervals):
            if i+1 < len(orderedIntervals):
                if (interval.start <= orderedIntervals[i+1].start and interval.end < orderedIntervals[i+1].end and interval.end >= orderedIntervals[i+1].start ): 
                  while (interval.start <= orderedIntervals[i+1].start and interval.end < orderedIntervals[i+1].end and interval.end >= orderedIntervals[i+1].start ):
                      interval.end = orderedIntervals[i+1].end
                      del orderedIntervals[i+1]
                elif (interval.start <= orderedIntervals[i+1].start and interval.end >= orderedIntervals[i+1].end):
                    del orderedIntervals[i+1]
        return orderedIntervals


# 这个算法存在逻辑缺陷，而且是在很难看……
# [[1,4],[0,2],[3,5]] 这个输入的情况下会出现错误 [[0,4],[3,5]]，但是希望的输出是 [[0,5]]
# [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]
# [[5,5],[1,3],[3,5],[4,6],[1,1],[3,3],[5,6],[3,3],[2,4],[0,0]]

# interval.start <= orderedIntervals[i+1].start 根本不必要，前面已经排好序了
# 因为牵扯到比较上一项和下一项，而且如果有删除下一行的操作发生，需要回到当前行重新比较，所以用for循环写比较麻烦，也很难看

# 在历经上面各种wrong case后，下面的代码终于AC了

class Solution:
    # @param intervals, a list of Interval
    # @return a list of Interval
    def merge(self, intervals):
        # write your code here
        orderedIntervals = sorted(intervals, key = lambda x:(x.start, x.end))
        i = 0
        
        while i < len(orderedIntervals) - 1:
            if (orderedIntervals[i].end >= orderedIntervals[i+1].end):
                del orderedIntervals[i+1]
            elif (orderedIntervals[i].end <= orderedIntervals[i+1].end and orderedIntervals[i].end >= orderedIntervals[i+1].start):
                orderedIntervals[i].end = orderedIntervals[i+1].end
                del orderedIntervals[i+1]
            else:
                i += 1
        return orderedIntervals

# 这样逻辑就清楚了许多，本题的逻辑是，把interval按开始时间排序，第二序是结束时间
# 然后遍历排序好的列表，只用考察当前项目的结束时间，和下一个项目的结束时间：
# case 1: 如果当前项目的结束时间比下一项目的结束时间晚，就直接把下一项目删掉 （不用考虑开始时间，因为已经排好序了）
# case 2: 如果当前项目的结束时间比下一项目的结束时间早： 那还需要考虑当前项目的结束时间是不是比下一项目的开始时间晚， 如果是，那就把当前项目的结束时间改为下一个项目的结束时间，然后把下一个项目删掉
# 接着再从头开始遍历， 因为永远要比较当前项和下一项，只有当当前项完全不符合合并的情况的时候，才i++，检查下一项。

# 初次接触这道题，逻辑陷阱很多，在leetcode和lintcode上反反复复折磨了两天才AC， 如果这是电面题，很容易一慌神，就做不出来了
# 所以internal类的题目，可以先考虑按起始时间，或者结束时间排序，然后再研究排好序后的数组，具体应该比较什么，本题是研究当前项目的结束时间与下一项目的结束及开始时间就可以了。
# airplane in skyline 和 meeting room之类的题目，按起始时间排好序后，光研究落地时间，并不能推出结论，所以需要用到扫描线算法