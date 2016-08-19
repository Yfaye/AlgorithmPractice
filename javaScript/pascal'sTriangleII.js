/*119. Pascal's Triangle II  QuestionEditorial Solution  My Submissions
Total Accepted: 85417
Total Submissions: 254267
Difficulty: Easy
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	var result = [];
	if (rowIndex < 0) {
		return result;
	}
	result = [1];
	if (rowIndex === 0) {
		return result;
	}
	result = [1,1];
	if (rowIndex === 1) {
		return result;
	}

	for (var row = 2; row <= rowIndex; row++) { // 注意这里要达到指定的rowIndex所以要用<=. debug之前用 <, 导致返回的是上一层的，而不是目标层的
		var tmp = [1];
		for (var i = 1; i < row; i++) {
			tmp[i] = result[i-1] + result[i];
		}
		tmp[i] = 1;
		result = tmp;
	}
	return result;    

};

//这题要用O（k）的space，是可以的，因为我们每生成新的一层，只跟上一层有关，我们可以在上一层的基础上改造已有数组

//疑惑，这种解法能不能严格的算O(K) space? 因为它其实是O（2k-1）space
