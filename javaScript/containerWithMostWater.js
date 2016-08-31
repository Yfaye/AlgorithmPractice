// 11. Container With Most Water 
// Total Accepted: 91349
// Total Submissions: 256633

// Difficulty: Medium
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container.

// Tags Array Two Pointers

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //corner case
    if (height === null || height.length < 2) {
    	return 0
    }

    var left = 0;
    var right = height.length - 1;
    var maxArea = Math.min(height[left], height[right]) * (right - left);

    while (left < right){
    	area = Math.min(height[left], height[right]) * (right - left);
    	if (area > maxArea) {
    		maxArea = area;
    	}
    	if (height[left] < height[right]) {
    		var t1 = left;
    		for (t1 = left + 1; t1 < right && height[t1] < height[left]; ++t1) {}
    		left = t1;
    	} else {
    		var t2 = right;
    		for (t2 = right - 1; t2 > left && height[t2] < height[right]; ++t2) {}
    		right = t2;
    	}
    }

    return maxArea
};

//自己的思路都po在python那个code里面了，下面是讨论区的讲解，也很明了，所以贴在下面
/*
    设置两个指针i, j, 一头一尾, 相向而行. 假设i指向的挡板较低, j指向的挡板较高(height[i] < height[j]).
    下一步移动哪个指针?
    -- 若移动j, 无论height[j-1]是何种高度, 形成的面积都小于之前的面积.
    -- 若移动i, 若height[i+1] <= height[i], 面积一定缩小; 但若height[i+1] > height[i], 面积则有可能增大.
    综上, 应该移动指向较低挡板的那个指针.
*/

//而且，在代码里面找到了我没有写出来的加速办法，也就是，如果里面的柱子比当前柱子还矮，面积是一定更小的，所以不用计算它的面积