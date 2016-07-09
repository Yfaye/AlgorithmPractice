/*120. Triangle My Submissions QuestionEditorial Solution
Total Accepted: 73923 Total Submissions: 240278 Difficulty: Medium
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
//这题不能用贪心，因为只能move到下一行相邻的位置上，而不是下一行最小值一定可以选
//但又可以说是可以用贪心的，因为是在下一行相邻的两个位置里，始终选最小的那个走。
//问题的解：一个值
//状态转移方程：lastMin + Math.min(lastCol, loatCol + 1);
//第一印象分析的解法出了问题，不是每行最小值，再下一行里相邻里选小的就一定最小
//而是从最后一行倒推上面一行的时候，选一个最小的加，但这一行每个点到此时的最小total都记录上
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    //corner case
    if (triangle === null || triangle.length === 0 || triangle[0].length === 0) {
    	return 0;
    }

    //init
    var row = triangle.length - 1;
    var sumAt = [];
    for (var j = 0; j < triangle[row].length; j++) {
        sumAt[row] = [];
    	sumAt[row][j] = triangle[row][j];
    }

    //DP
    for (row = triangle.length - 2; row >= 0; row--) {
        var col = 0;
    	for (; col < triangle[row].length-1; col++) {
            sumAt[row] = [];
    		sumAt[row][col] = Math.min(sumAt[row + 1][col], sumAt[row + 1][col + 1]) + triangle[row][col];	
    		console.log('sumAt['+row+'][' +col+'] is ' + sumAt[row][col]);
    	}	
    }

    return sumAt[0][0];
};

minimumTotal([[-10],[1,2],[80,4,5],[-100,1,2,80]]);
/*
Exception: TypeError: sumAt[row] is undefined
minimumTotal@Scratchpad/1:49:25
@Scratchpad/1:57:1
*/
/*
Exception: TypeError: sumAt[0] is undefined
minimumTotal@Scratchpad/1:55:5
@Scratchpad/1:58:1
*/