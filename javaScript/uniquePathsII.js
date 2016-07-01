/*63. Unique Paths II
Total Accepted: 70076 Total Submissions: 235689 Difficulty: Medium

Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,

There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

The total number of unique paths is 2.

Note: m and n will be at most 100.
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	//corner case
	if (obstacleGrid === null || obstacleGrid.length === 0 || obstacleGrid[0].length === 0 || obstacleGrid[0][0] === 1) {
		return 0;
	}
	
	var rowNum = obstacleGrid.length;
	var colNum = obstacleGrid[0].length;
	if (obstacleGrid[rowNum - 1][colNum - 1] === 1) {
		return 0;
	}

	//init
	var pathsNumAt = [];
	pathsNumAt[0] = [];
	pathsNumAt[0][0] = 1;

	for (var col = 1; col < colNum; col++) {
		pathsNumAt[0][col] =1;
		if (obstacleGrid[0][col] === 1) {
			for (var k = col; k < colNum; k++ ) {
				pathsNumAt[0][k] = 0;
			}
		  break;
		}
	}

	for (var row = 1; row < rowNum; row++) {
		pathsNumAt[row] = [];
		pathsNumAt[row][0] = 1;
		if (obstacleGrid[row][0] === 1) {
			for (var r = row; r < rowNum; r++ ) {
				pathsNumAt[r] = [];
				pathsNumAt[r][0] = 0;
			}
			break;
		}
	}


	//DP
	for (var i = 1; i < rowNum; i++) {
		for (var j = 1; j < colNum; j++) {
			if (obstacleGrid[i-1][j] === 1  ) {
				pathsNumAt[i-1][j] = 0;
			}
			if (obstacleGrid[i][j-1] === 1 ) {
				pathsNumAt[i][j-1] = 0;
			}
			pathsNumAt[i][j] = pathsNumAt[i-1][j] + pathsNumAt[i][j-1];
		}
	}

	return pathsNumAt[rowNum - 1][colNum - 1];
    
    
};
uniquePathsWithObstacles([	[0,0,0,0,0],
														[1,0,0,0,0],
														[0,0,0,0,0],
														[0,0,0,0,0]
													]);


/*
Exception: TypeError: pathsNumAt[i] is undefined
uniquePathsWithObstacles@Scratchpad/4:73:4
@Scratchpad/4:80:1
*/
/*
Exception: TypeError: pathsNumAt[r] is undefined
uniquePathsWithObstacles@Scratchpad/4:57:5
@Scratchpad/4:80:1
*/
/*
NaN
*/
/*
NaN
*/
/*
NaN
*/
/*
NaN
*/
/*
0
*/
/*
20
*/

/* 本题在initialize阶段，犯的小错太多，导致一直debug，= 和 === 混合使用，说明code的实操还是不够，练习的时候，要多带脑子