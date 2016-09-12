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

//上面各种没有写出来我就不想吐槽自己了，下面再贴一个高人的代码，看完真的很想哭T_T
public int removeDuplicates(int[] nums) {
    int i = 0;
    for (int n : nums)
        if (i < 2 || n > nums[i-2])
            nums[i++] = n;
    return i;
}

//以下是自己照高人的答案改了改然后AC了
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var tail = 0;
    for (var i = 0; i < nums.length; i++) {
        if (tail < 2 || nums[i] > nums[tail - 2]) {  //这里第一个条件写tail<2或者i<2均可，不影响答案AC 2. 后一个条件，这里记住一定要比较的是 nums[i] 和 nums[tail - 2] 而不是 nums[i] 和 nums[i - 2], 因为前者可以保证，永远比较的是是否和tail所结尾的数组有两个以上的重复，而后者则不能保证i-2的位置
            nums[tail] = nums[i];
            tail++;
        }
    }
    
    return tail;
    
};

//自己琢磨了一下这个two pointer的思想，其实是这样，两个指针，一个永远指向去重后的数组的尾部的后面一个，一个是跑在前面用来遍历整个数组。当新数组的长度小于2时，肯定不会有重复，所以可以让tail先自由增长到2。
//然后先跑的那个i就要开始比较了，自己的当前，是不是能够大于tail那个数组的倒数第二个，注意这里是tail-2，因为tail指的其实是数组尾部的后面一个。如果不是重复的，就放进去，tail++，如果是重复的，什么都不做，i继续往前跑
