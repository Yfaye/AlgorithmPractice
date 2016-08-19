/*219. Contains Duplicate II
Total Accepted: 44835 Total Submissions: 154839 Difficulty: Easy

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//Time Limitation Exceeded
var containsNearbyDuplicate = function(nums, k) {
	for(var i = 0, l = nums.length; i <= l - k ; i++) { // 这里要确保检查到每一个元素，因为有可能最后两个值是一样的，这样的话就检查不到那里了
		for (var j = 1; j < k; j++) {
			if (nums[i] == nums[i + j]) {
				return true;
			}
		}
	}
    return false;
};

// 上面代码是有问题的，下面稍作修改已AC
var containsNearbyDuplicate = function(nums, k) {
	for(var i = 0, l = nums.length; i < l; i++) {  
		for (var j = 1; j <= k & i+j < l; j++) {
			if (nums[i] == nums[i + j]) {
				return true;
			}
		}
	}
    return false; 
};

// 上面的代码虽然已经AC，但是算法上最快捷的应该是用hashmap来做

