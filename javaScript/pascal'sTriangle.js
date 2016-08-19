/*118. Pascal's Triangle  QuestionEditorial Solution  My Submissions
Total Accepted: 95473
Total Submissions: 273695
Difficulty: Easy
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [];
  if (numRows === 0) {
  	return result;
  }
  result.push([1]);
  if (numRows === 1) {
  	return result;
  }
  result.push([1,1]);
  if (numRows === 2) {
  	return result;
  }

  for (var row = 2; row < numRows; row++) {
  	var currentRow = [1];
  	for (var i = 1; i < row; i++) { // 这里i应该是小于所在行的行数，debug前是i < numRows - 1, 导致出错
  		currentRow[i] = result[row-1][i-1] + result[row-1][i];
  	}
  	currentRow[i] = 1;
  	result.push(currentRow);
  }

  return result;
};
// 此代码已AC，数组题还是要多练，注意下标