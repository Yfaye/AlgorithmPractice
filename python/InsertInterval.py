# Insert Interval

# Description
# Given a non-overlapping interval list which is sorted by start point.

# Insert a new interval into it, make sure the list is still in order and non-overlapping (merge intervals if necessary).

# Example
# Insert [2, 5] into [[1,2], [5,9]], we get [[1,9]].

# Insert [3, 4] into [[1,2], [5,9]], we get [[1,2], [3,4], [5,9]].

# Tags 
# Basic Implementation LinkedIn Google
# Related Problems 
# Easy Merge Intervals 20 %

# Definition for an interval.
# class Interval(object):
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution(object):
    def insert(self, intervals, newInterval):
        """
        :type intervals: List[Interval]
        :type newInterval: Interval
        :rtype: List[Interval]
        """
        intervals.append(newInterval)
        sortedIntervals = sorted(intervals, key = lambda x: (x.start, x.end))

        i = 0

        while i < len(sortedIntervals) - 1: # 总是忘记这里的range是 i < length - 1, 因为下面都要检查到i+1
            if (sortedIntervals[i].end >= sortedIntervals[i+1].end):
                del sortedIntervals[i+1]
            elif (sortedIntervals[i].end < sortedIntervals[i+1].end and sortedIntervals[i].end >= sortedIntervals[i+1].start):
                sortedIntervals[i].end = sortedIntervals[i+1].end
                del sortedIntervals[i+1]
            else:
                i += 1
        return sortedIntervals

# 这题跟merge Intervals 是完全一样的一道题，就是多一个append操作。但是如果一开始出的是这一道题，就比merge 更难想到一些......
# 这两题自己都用的是排序好后删除的做法，下次要试一下用一个空数组然后生成的方法