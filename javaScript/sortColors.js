// 75. Sort Colors  QuestionEditorial Solution  My Submissions
// Total Accepted: 114840
// Total Submissions: 320862
// Difficulty: Medium
// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.

// click to show follow up.

// Follow up:
// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

// Could you come up with an one-pass algorithm using only constant space?
// Subscribe to see which companies asked this question

// Tags Array Two Pointers Sort
// Similar Problems (M) Sort List (M) Wiggle Sort (M) Wiggle Sort II
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums === null || nums === undefined || nums.length === 0) {
        return;
    }
    var red = 0;
    var white = 0;
    
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === 0) {
            red++;
        } else if (nums[i] === 1) {
            white++;
        } 
    }

    for (i = 0; i < red;i++) {
        nums[i] = 0;
    }
    var index = i;
    for (i = 0; i < white; i++){
        nums[index+i] = 1;
    }
    var k = index + i;
    for (; k < nums.length; k++){
        nums[k] = 2;
    }
    return;
};

//以上counting sort的解法也是三改五改才写出来的，被今天看到的桶排序喜昏了头，上来就红白蓝各一个数组，往里面加0，加1，加2，……，各种笨...

// 下面终于勉强弄懂了两个指针的算法是怎么一回事：
// 用两个数组索引red=0, blue=n-1做为指针，索引小于red的数组元素保证值为0，索引大于blue的数组元素保证值为2。遍历数组，仅当当前值为0或2时，分别与red和blue指向的数组元素进行交换。
// 这种两个指针怎么swap能swap出来新世界的解法还不完全没入门，还要再考虑考虑
// 解法贴下面，供参考
// LeetCode, Sort Colors
// 双指针，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void sortColors(int A[], int n) {
        // 一个是red的index，一个是blue的index，两边往中间走
        int red = 0, blue = n - 1;

        for (int i = 0; i < blue + 1;) {
            if (A[i] == 0)
                swap(A[i++], A[red++]);
            else if (A[i] == 2)
                swap(A[i], A[blue--]);
            else
                i++;
        }
    }
};