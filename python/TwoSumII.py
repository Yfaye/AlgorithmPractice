#Two Sum II

#Description
#Given an array of integers, find how many pairs in the array such that their sum is bigger than a specific target number. Please return the number of pairs.

#Example
#Given numbers = [2, 7, 11, 15], target = 24. Return 1. (11 + 15 is the only pair)

#Challenge
#Do it in O(1) extra space and O(nlogn) time.

#Tags 
#Two Pointers Sort

# 本题一目了然的解法是双循环，但那样的话，时间复杂度会达到N2，不符合要求，所以要考虑别的解法
# 根据老师讲的，array的题目先sort之后，再做考虑
# sort之后会有什么性质呢， 左右指针分别指向两头，如果这两个指针所指的数的和已经大于target了，那么这个之间的pair都是符合要求的，然后right--再看，如果不大于，那就把left++看看有没有
class Solution:
    # @param nums, an array of integer
    # @param target, an integer
    # @return an integer
    def twoSum2(self, nums, target):
        # Write your code here
        nums.sort() # sort() 在debug之前弄掉了，所以答案总是不对，sort是本题后面逻辑的前提
        left = 0
        right = len(nums) - 1
        ans = 0
        while left < right:
        	if nums[left] + nums[right] > target:
        		ans += right - left
        		right -= 1
        	else:
        		left += 1
        return ans

#所以本题的时间开销其实是nlogn + n 然后就记为nlogn
#顺便要赞叹一句，这么想真是太聪明了！！！