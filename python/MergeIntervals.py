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
                    interval.end = orderedIntervals[i+1].end
                    del orderedIntervals[i+1]
                elif (interval.start <= orderedIntervals[i+1].start and interval.end >= orderedIntervals[i+1].end):
                    del orderedIntervals[i+1]
        return orderedIntervals


# 这个算法存在逻辑缺陷，而且是在很难看……
# [[1,4],[0,2],[3,5]] 这个输入的情况下会出现错误 [[0,4],[3,5]]，但是希望的输出是 [[0,5]]