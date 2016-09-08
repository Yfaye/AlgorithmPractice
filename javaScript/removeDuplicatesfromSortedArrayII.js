// 80. Remove Duplicates from Sorted Array II  QuestionEditorial Solution  My Submissions
// Total Accepted: 87149
// Total Submissions: 256606
// Difficulty: Medium
// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?

// For example,
// Given sorted array nums = [1,1,1,2,2,3],

// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

// Tags Array Two Pointers

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //corner case
    if (nums === null || nums === undefined || nums.length === 0) {
    	return 0;
    }
    if (nums.length < 3) {
    	return nums.length;
    }

    var i = 0;
    var checker = 0;
    var ans = 0;

    for (; i < nums.length; i++) {
    	if ((i+1 < nums.length) && (nums[i] !== nums[i+1])) {
    		ans += 1;
    		continue;
    	}
    	if (i + 1 === nums.length) {

    	}
    	var mark = nums[i];
    	checker = i + 2;
    	while (checker < nums.length &&　mark === nums[checker]) {
    		checker++;
    	}
    	i = checker;
    }
};

//上面各种没有写出来我就不想吐槽了，下面再贴一个高人的代码，看完真的很想哭T_T
public int removeDuplicates(int[] nums) {
    int i = 0;
    for (int n : nums)
        if (i < 2 || n > nums[i-2])
            nums[i++] = n;
    return i;
}