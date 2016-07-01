/*62. Unique Paths
Total Accepted: 93067 Total Submissions: 251914 Difficulty: Medium

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 // 问题的解：可行路径的条数
 // 目标函数：AllPath(Grid[m - 1][n - 1])
 // 约束条件：Down + Right
 // 递推方程：pathAt[m][n] = pathAt[m-1][n] + pathAt[n-1][m]
var uniquePaths = function(m, n) {
    //corner case
    if (m < 1 || n < 1) {
        return 0;
    }
    if (m === 1 || n === 1) {
        return 1;
    }
    
    //init
    var pathsNumAt = [];
    pathsNumAt[0] = [];
    for (var col = 0; col < n; col++) {
        pathsNumAt[0][col] = 1;
    }
    for (var row = 1; row < m; row++) {
        pathsNumAt[row] = [];
        pathsNumAt[row][0] = 1;
    }
    
    //DP
    for (var i = 1; i < m; i++) {
        for (var j =1; j < n; j++) {
            pathsNumAt[i][j] = pathsNumAt[i-1][j] + pathsNumAt[i][j-1];
        }
    }
    
    return pathsNumAt[m-1][n-1];
    
};

uniquePaths(3,7);
