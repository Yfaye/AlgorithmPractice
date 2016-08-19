/*167. Two Sum II - Input array is sorted  QuestionEditorial Solution  My Submissions
Total Accepted: 15644
Total Submissions: 31587
Difficulty: Medium
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	// corner case
	if (numbers === null || numbers.length < 2 || numbers[0] > target) {
		return [];
	}

	var indices = [];
	var len = numbers.length;

	for (var i = 0; i < len; i++) {
		var curT = target - numbers[i];

		if (curT < numbers[i]){
			return indices;
		}

		var start = i + 1; 
		var end = len - 1;

		while (start + 1 < end) {
			var mid = start + Math.floor((end - start) / 2);
			if (numbers[mid] === curT) {
				indices.push(i+1);// for non-zero based index
				indices.push(mid+1);// for non-zero based index
				return indices;
			} else if (numbers[mid] < curT) {
				start = mid;
			} else {
				end = mid;
			}
		}

		if (numbers[start] === curT) {
				indices.push(i+1); // for non-zero based index
				indices.push(start+1);// for non-zero based index
				return indices;			
		}
		if (numbers[end] === curT) {
				indices.push(i+1);// for non-zero based index
				indices.push(end+1);// for non-zero based index
				return indices;				
		}
	} 
};

// 看到排序好的数组，就想到用二分，感觉这题的基本思想是，先用target-当前值，然后再在剩下的数组里面搜寻目标值， 如果没有就再顺次移动
// 有一个优化是，如果target-numbers[i]减完的值，比目前的numbers[i]还小，就不用再继续搜索了，直接返回[], 因为number[i]是递增的

// 上面代码已AC， 唯一debug的地方是，这个返回的index不是zero based所以都+1