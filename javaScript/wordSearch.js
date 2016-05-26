/*79. Word Search
Total Accepted: 76205 Total Submissions: 329105 Difficulty: Medium

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var dx = [-1, 0, 1, -1, 0, 1, -1, 1];
  var dy = [-1, -1, -1, 1, 1, 1, 0, 0];
  
  var inRange = function(x,y){
    if (x < 0  || y < 0|| y >= board.length || x >= board[0].length) {
      return false;
    }
    return true;
  }

  var hasWord = function(x, y, board, word){
  	//base case 1
  	if (!inRange(x,y)) {
  		return false;
  	}
  	if (board[x][y] != word[0]) {
  		return false;
  	}
  	if (word.length === 0) {
  		return true;
  	}

  	//recursive case: check neighboring cell
  	for (var direction = 0; direction < 8; ++direction) {
  		var nextX = x + dx[direction];
  		var nextY = y + dy[direction];

  		if(hasWord(nextX, nextY, board, word.substr(1))) {
  			return true;
  		}
  		return false;
  	}
  };
  hasWord(0, 0, board, word);
  console.log('done');
};
var result = exist([
                      ['A','B','C','E'],
                      ['S','F','C','S'],
                      ['A','D','E','E']
                    ], 'SEE');

console.log(result);
/*
undefined
*/