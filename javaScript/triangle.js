/*120. Triangle

    Total Accepted: 73999
    Total Submissions: 240474
    Difficulty: Medium

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
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle. */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
 //问题的解：1个值。
 //目标函数：min{AllPath} 所行路径的最小和。
 //第一印象：多阶段决策问题。
 //状态转移方程：每阶段存上一阶段+本阶段可选两个值中的最小值
 //				如果col为0： f[k+1][col] = f[k][col] + min(triangle[k+1][col], triangle[k+1][col+1]) // 情况跟col不为零的时候不一样
 //计算到最后一排，再从左到右扫一遍，返回最小的那个值。
 //为了避免从左到右扫一遍，可以考虑从最后一排开始往上算，不过initilize的时候，需要扫最后一排的时间
 //如果从下往上算，状态转移方程应该是：
 //f[k-1][col] = triangle[k-1][col] + min(f[k][col], f[k][col+1]) //这里col的取值范围是本册length-1

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
    var sumAt = [];
    var totalRow = triangle.length;
    var maxCol = triangle[totalRow-1].length;
    sumAt[totalRow - 1] = [];
    for (var i = 0; i < maxCol; i++) {
    	sumAt[totalRow-1][i] = triangle[totalRow-1][i];
    }

    //DP
    for (row = totalRow-2; row >= 0; row--) {
    	sumAt[row] = [];
    	for (col = 0; col < triangle[row].length; col++) {
    		sumAt[row][col] = triangle[row][col] + Math.min(sumAt[row+1][col], sumAt[row+1][col+1]);
    	}
    }

    return sumAt[0][0];
};

//本题的状态转移方程，在from Top to down的时候一直考虑错了，所以怎么debug都过不了所有case。
//当时错误的思路是，本层当前最少sum，是上一层过来，然后在本层两个值里面选一个最小的，而这只适用于col=0的时候，因为它只有一个上线，其他的点，都有两个上线。所以应该是两个上线里选个一个最小的，与本层当前这个数相加。