/*
349. Intersection of Two Arrays My Submissions QuestionEditorial Solution
Total Accepted: 18865 Total Submissions: 42098 Difficulty: Easy

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var result = [];
	nums1.sort(function(a,b){return a-b});
	nums2.sort(function(a,b){return a-b});
	console.log(nums1);
	console.log(nums2);
	if (nums2.indexOf(nums1[0]) !== -1) {
		result.push(nums1[0]);
	}
	for (var i = 1; i < nums1.length; i++) {
		if (nums1[i] === nums1[i-1]) {
			continue;
		}
		if (nums1[i] === nums2[0]) {
			result.push(nums2[0]);
		}
		for (var j = 1; j < nums2.length; j++) {
			if (nums2[j] === nums2[j-1]) {
				continue;
			}
			if (nums1[i] === nums2[j]) {
				result.push(nums2[j]);
			}
		}
	}
	return result;
};

intersection([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4]);

/*
0,6
*/