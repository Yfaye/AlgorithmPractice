/*64. Minimum Path Sum
Total Accepted: 75545 Total Submissions: 212832 Difficulty: Medium

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	//corner case
	if (grid === null || grid.length === 0 || grid[0].length === 0) {
		return 0;
	}

	var totalRow = grid.length;
	var totalCol = grid[0].length;
	console.log('total row is ' + totalRow);
	console.log('total col is ' + totalCol);
	var pathSumAt = [];
	pathSumAt[0] = [];
	pathSumAt[0][0] = grid[0][0];

	//init
	for (var col = 1; col < totalCol; col++) {
		console.log('prev sum is: ' + pathSumAt[0][col-1]);
		console.log('cur val in grid is: ' + grid[0][col]);
		pathSumAt[0][col] =  pathSumAt[0][col-1] + grid[0][col];
		console.log('col init of pathSumAt[0][' + col + '] is: ' + pathSumAt[0][col]);
	}
	for (var row = 1; row < totalRow; row++) {
		pathSumAt[row] = [];
		pathSumAt[row][0] = pathSumAt[row-1][0] + grid[row][0];
		console.log('row init of pathSumAt[' + row + '][0] is: ' + pathSumAt[row][0]);
	}

	//DP
	for (var i = 1; i < totalRow; i++) {
		for (var j = 1; j < totalCol; j++) {
			pathSumAt[i][j] = Math.min(pathSumAt[i-1][j]+ grid[i][j], pathSumAt[i][j-1]+ grid[i][j]);
			console.log('pathSumAt['+ i + '][' + j +'] is: ' + pathSumAt[i][j]);
		}
	}

	return pathSumAt[totalRow-1][totalCol-1];
    
};

minPathSum([[0,1,3,6],[2,4,3,5]]);
