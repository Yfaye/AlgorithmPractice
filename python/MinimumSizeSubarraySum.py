# Minimum Size Subarray Sum

# Description
# Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return -1 instead.

# Example
# Given the array [2,3,1,2,4,3] and s = 7, the subarray [4,3] has the minimal length under the problem constraint.

# Challenge 
# If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

# Tags 
# Two Pointers Array Facebook

# Related Problems 
# Medium Subarray Sum Closest 18 %
# Easy Subarray Sum 28 %

class Solution:
     # @param nums: a list of integers
     # @param s: an integer
     # @return: an integer representing the minimum size of subarray
    def minimumSize(self, nums, s):
        # write your code here
        if len(nums) == 0:
        	return -1
        
        total = 0
        for num in nums:
        	total += num
        if total < s:
        	return -1

        left = 0
        right = len(nums) - 1
        gap = total - s

        while (left < right):
        	if nums[left] <= nums[right] and nums[left] <= gap:
                gap -= nums[left]
                left += 1
        	elif nums[left] > nums[right] and nums[right] <= gap:
                gap -= nums[right]
                right -= 1
        	else:
        		break

        return (right-left) + 1 





#这题跟container那题基本一样诶，最大size的subarry就是左右指针分别在两头了。
# 如果全体sum都小于target，那就return -1了
# 如果>=target, 我们就可以来试试看能不能缩小，我们能忍受的缺失是 全体sum - target，如果当前的left 或者 right 小于这个sum值，我们就可以安全的缩小范围
# 那么接下来要考虑的是，我们到底是先移左还是先移右呢？还是应该谁小就先移谁，因为越小，意味着我们后面可能可以移除的东西越多

#[2,3,1,2,4,3]， 7 这里如果先移右边的3就会造成问题……这个算法还是有逻辑缺陷的，还没有想出来逻辑缺陷在哪里

#看了看九章的答案，是先让right指针从左到右涨到总体和比target大的位置，然后再让left指针从左到右从总体和里面减去……还没有理解
#终于看明白了人家聪明优秀的O(n)算法了，它实际上是要left和right组成一个弹性区间，这个弹性区间的sum总是>=target的（根据题意），然后这个区间总是right先挪，然后left跟着挪，记录这个区间长度最小的时候，即可
#我想说，为什么聪明的办法都是别人想出来的！T_T

class Solution:
     # @param nums: a list of integers
     # @param s: an integer
     # @return: an integer representing the minimum size of subarray
    def minimumSize(self, nums, s):
        # write your code here
        if len(nums) == 0:
            return -1

        n = len(nums)
        total = 0
        ans = n + 1 #这里写成n + 1， 是因为后面要取 right - left + 1  和 ans 的最小值，并且要判断是不是根本right走到头，left完全没动之后，也没有大到S
        left = 0
        right = 0

        while right < n:
            while (right < n && total < s):
                total += nums[right]
                right += 1
            if total < s:
                break  # 这里原来是 return -1， debug时改成break，因为不排除有情况，left-right区间走到了后半段，结果后半段加起来根本没有比s大的时候，这里return -1 就错了
            while (left < right && total >= s):
                total -= nums[left]
                left += 1
            ans = min(ans, right - left + 1)

        if ans == n + 1:
            return -1
        else：
            return ans  # 这里不能直接return ans 是因为如果right走到头，left完全没动，还比s小，这种情况下， ans的最小值是之前的初始值，而 right - left + 1 的值也是n - 0 + 1
                        # 如果right走到头，total已经>=s了，这里无论如何left都会往右挪动一步，right - left + 1 的值就是 n - 1 + 1 = n



