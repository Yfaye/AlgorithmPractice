/*36. Valid Sudoku  QuestionEditorial Solution  My Submissions
Total Accepted: 80382
Total Submissions: 254849
Difficulty: Easy
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	var totalRow = board.length;
	var totalCol = board[0].length;

	var checkOneRow = function(board, row){
		var rowSet = new Set();
		for (var i = 0; i < totalCol; i++) {
			if (rowSet.has(board[row][i]) || board[row][i] < 1 || board[row][i] > 9) {
				return false;
			}
			if (board[row][i] !== '.') {
				rowSet.add(board[row][i]);			
			}

		}
	}

	var checkOneCol = function(board,col){
		var colSet = new Set();
		for (var j = 0; j < totalRow; j++) {
			if (colSet.has(board[j][col]) || board[j][col] < 1 || board[j][col] > 9) {
				return false;
			}
			if (board[j][col] !== '.') {
				colSet.add(board[j][col]);
			}
		}
	}

	var checkOneSqare = function(board, startX, startY) {
		var squareSet = new Set();
		for (var r = 0; r < 3; r++) {
			for (var c = 0; c < 3; c++) {
				if (squareSet.has(board[startX+r][startY+c]) || board[startX+r][startY+c] < 1 || board[startX+r][startY+c] > 9) {
					return false;
				}
				if (board[startX+r][startY+c] !== '.') {
					squareSet.add(board[startX+r][startY+c]);
				}
			}
		}
	}

	for (var row = 0; row < totalRow; row++) {
		checkOneRow(board, row);
	}

	for (var col = 0; col < totalCol; col++) {
		checkOneCol(board, col);
	}

	for (var u = 0, v = 0; u < totalRow - 3 && col < totalCol - 3; u+3,v+3) {
		checkOneSqare(board, u, v);
	}
	return true;   
};