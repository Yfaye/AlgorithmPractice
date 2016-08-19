/*189. Rotate Array  QuestionEditorial Solution  My Submissions
Total Accepted: 85293
Total Submissions: 383280
Difficulty: Easy
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

Hint:
Could you do it in-place with O(1) extra space?
Related problem: Reverse Words in a String II
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var n = nums.length;
    if (k > n) {
        k %= n;
    }
    if (k === n) {
        return;
    }
    
    var index = n - k;
    var tmp = nums.splice(index, k);
    for (var i = tmp.length - 1; i >= 0; i--) {
        nums.unshift(tmp[i]);       
    }    
};
// 上面答案AC了，用了js自有的splice和unshift函数。下面考虑不用js的这两个函数，并且只用O（1）extra space的方案
var rotate = function(nums, k) {
    var n = nums.length;
    if (k > n) {
        k %= n;
    }
    if (k === n) {
        return;
    }
    
    var pivot = n - k;

    var rotated = pivot;
    var i = 0;

    while (rotated < n && i < pivot) {
    	var tmp = nums[i];
    	nums[i] = nums[rotated];
    	nums[rotated] = tmp;
    	rotated++;
    	i++;
    }

    // left < right

    // left > right

	// 这么写太复杂了……
};

//上面纯SWAP的方案太复杂，结果在discuss区看到一个超棒的解决方案 如下：

var rotate = function(nums, k) {
    var n = nums.length;
    if (k > n) {
        k %= n;
    }
    if (k === n) {
        return;
    }
    
    function reverse(nums, i, j) {
    	while(i < j) {
    		var tmp = nums[i];
    		nums[i] = nums[j];
    		nums[j] = tmp;
    		i++;
    		j--;
    	}
    }
    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);

}

// 上面代码已AC， 这么聪明的办法，又不是我想出来的，让我哭一会儿