# Number of Airplanes in the Sky

# Description
# Given an interval list which are flying and landing time of the flight. How many airplanes are on the sky at most?

# Notice
# If landing and flying happens at the same time, we consider landing should happen at first.


# Example
# For interval list

# [
#   [1,10],
#   [2,3],
#   [5,8],
#   [4,7]
# ]
# Return 3

# Tags 
# LintCode Copyright Array Interval

# Related Problems 
# Easy Merge Intervals

"""
Definition of Interval.
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""


class Solution:
    # @param airplanes, a list of Interval
    # @return an integer
    def countOfAirplanes(self, airplanes):
        # write your code here
        most = 0

        # set takeoff time line
        schedule = []
        for airplane in airplanes:
        	schedule.append(airplane.start)
        schedule.sort()

        for takeoff in schedule:
        	inSky = 0
        	for airplane in airplanes:
        		if (airplane.start <= takeoff and airplane.end >= takeoff): # 写成 &&， python里面应该用 &&
        			inSky += 1 # 写成++,在python里面应该用+=1

        	if inSky >= most:
        		most = inSky

        return most


# 上面算法得出答案是可以的，但是复杂度是O（N2），果然就TLE了，那么要想办法降到logN 或者 N
# 结果自己想半天，一看九章的答案，简直想扇自己，怎么那么笨T_T
# 其实可以建一个叫天空的数组，把起飞降落的时间点都加进去，因为只有到特定时间点，飞机数量才会发生变化。
# 所以可以把所有时间点排序后，遍历这个时间点数组，一旦这个时间点是飞机起飞的时间点，就+1，一旦这个时间点是飞机降落就-1。遍历过程中记录每个时间点

# sorter below is for this condition: If landing and flying happens at the same time, we consider landing should happen at first.
# 也就是发生在同一个时间点的 降落 要排在 起飞 前面，这样符合上面的要求
def countOfAirplanes(airplanes):
    # set time points
    timepoints = []
    for airplane in airplanes:
        timepoints.append([airplane.start, 1])
        timepoints.append([airplane.end, -1])
    timepoints = sorted(timepoints, key=lambda x:(x[0],x[1]))  # 这个key的意思是，同一个时间点的降落要排在起飞前面，这样才不会多算飞机

    inSky = 0
    most = 0
    for timepoint in timepoints:
        inSky += timepoint[1] 
        if inSky >= most:
            most = inSky
    return most
