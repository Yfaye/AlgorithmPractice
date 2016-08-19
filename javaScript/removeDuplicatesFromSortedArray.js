/*26. Remove Duplicates from Sorted Array  QuestionEditorial Solution  My Submissions
Total Accepted: 149599
Total Submissions: 435018
Difficulty: Easy
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums === null || nums.length === 0){  // Debug 1: 数组题要注意，前面的corner case一般是需要的，因为要取length什么的
        return 0;
    }

	var i = 0;
	var finder = 0;

	while (finder < nums.length-1) {
		while(nums[finder] === nums[finder+1] && finder < nums.length-2) {  // 注意这个循环里因为有两处finder++ 所以这个地方应该限制为 <nums.length-2
			finder++;
		}
		nums[i] = nums[finder];
		i++;
		finder++;
	}

	//now nums[finder] is the last element of nums
	if (nums[finder] === nums[i-1]) {
		nums.length = i;
		return i;
	}

	if (nums[finder] !== nums[i-1]) {
		nums[i] = nums[finder];
		nums.length = i+1;
		return i+1;
	}    
     
};

// 这个题目分析了一下，跟那个remove zeros 其实是一样的，要用两个指针，一个指针找不重复的元素，一个指针指向插入的位置。最后指向不重复元素的那个指针，可以用来计算数组的长度。
