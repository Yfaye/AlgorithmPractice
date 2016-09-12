// 15. 3Sum  QuestionEditorial Solution  My Submissions
// Total Accepted: 141254
// Total Submissions: 709187
// Difficulty: Medium
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
// Subscribe to see which companies asked this question

// Tags Array Two Pointers
// Similar Problems (E) Two Sum (M) 3Sum Closest (M) 4Sum (M) 3Sum Smaller

// 虽然是3sum，但是 a+b+c = 0. 也就等同于 a+b = -c. 另一个要考虑的地方，是不能有重复的a,b,c. 

// 思路不是很清晰，于是在网上看了看讲解. 其实是对Array里的每个值，在剩下的序列里求一个two sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	//corner case
	if (nums === null || nums === undefined || nums.length < 3) {
		return [];
	}


	var ans = [];

	for (var i = 0; i < nums.length; i++) {
		var target = -nums[i];
		for (var j = 0; j < nums.length; j++) {
			var hash = new Map();
			if (hash.has(nums[j])) {
				ans.push([hash.get(nums[j]), j, i]);
			} else {
				hash.set((target - nums[j]),j);
			}
		}
	}

	return ans;
    
};


// 用hash的办法做，[-1,0,1,-1,2,-4] 结果是[[-1,0,1],[-1,-1,2],[0,1,-1]]。怎么想办法去重，都有问题，所以去网上搜了一下，发现3SUM要去重，靠的是排序和指针，所以是不能单纯用hash table来做的。
// 摘录网上的讨论如下：
// --这道题让我想起了Leetcode的第一道题，即2Sum。很多人跟我说这两道题很像，但是我做完之后感觉一点都不像。
// --在2Sum这道题里面，Leetcode对时间的要求很高，所以用的是hash table的思想来解决的，即把value为key，position作为value，如果有冲突的话可以在一个bucket里放多个value。这样的话复杂度就只有O(n)。
// --3Sum不一样，是确定一个值之后来确定另外两个值。确定另外两个值复杂度最低也是O(n)，所以总体的复杂度是O(n^n)。
// --仔细观察题目，第一个要求是要将数组以增序输出，所以我们最好将整个数组排序，复杂度为O(n^n)，最低为O(nlogn)（使用快排）。排序对后面的扫描是相当有用的。
// --第二个要求是不能重复。初看上去挺难的，其实很简单，只需要在扫描的过程中跳过重复的既可。

var threeSum = function(nums) {
	//corner case
	if (nums === null || nums === undefined || nums.length < 3) {
		return [];
	}
	var ans = [];

	nums.sort(function(a,b){return a-b}); //记住js的sort是按字典序排序的，debug加上这里，就AC了
	for (var i = 0; i < nums.length - 2; i++) { //只用扫描到倒数第三个数，只剩两个数，是怎么也构成不了a+b+c的
		if (i > 0 && nums[i] === nums[i-1]) {
			continue;  // 去重
		}
		var curtarget = target - nums[i];
		var left = i+1; //去重
		var right = nums.length - 1;

		while (left < right) {
			var cursum = nums[left] + nums[right];
			if (cursum === curtarget) {
				ans.push([i, left, right]);
				left++;
				right--;
				while(nums[left] === nums[left-1]) {left++;}  //去重
				while(nums[right] === nums[right+1]) {right--;}//去重
			} else if (cursum < curtarget) {
				left++;
			} else {
				right--;
			}
		}
	}

	return ans;
    
};