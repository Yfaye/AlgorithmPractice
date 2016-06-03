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
  var dx = [-1, 0, 1, 0];
  var dy = [0, -1, 0, 1];
  
  var inRange = function(x,y){
    if (x < 0  || y < 0|| y >= board.length || x >= board[0].length) {
      return false;
    }
    return true;
  }

  var hasWord = function(x, y, board, wordstr){
    console.log('start recursion, x is '+ x +' y is ' + y + ' word is ' + wordstr);
  	//base case 1
    if (wordstr.length === 0) {
      console.log('got word length 0, so return true');
  		return true;
  	}
  	if (inRange(x,y) === false) {
      console.log(x + ' and ' + y + ' is out of range, so return false');
  		return false;
  	}
  	if (board[y][x] !== wordstr.charAt(0)) {
      console.log(board[y][x] + ' and ' + wordstr.charAt(0) + ' is not same, so return false');
  		return false;
  	}
    
  	//recursive case: check neighboring cell
  	for (var direction = 0; direction < 4; ++direction) {
  		var nextX = x + dx[direction];
  		var nextY = y + dy[direction];
      if (hasWord(nextX, nextY, board, wordstr.substring(1))) {
          return true;
      }
  		//return false; /*This is the mistake 1 I made*/
  	}
   return false;
  };
  
  for (var v = 0; v < board.length; v++) {
    for (var u = 0; u < board[0].length; u++) {
      if(hasWord(u, v, board, word)){
        return true;
      }
    }
  }
  return false;
};
var result = exist([
                      ['A','B','C','E'],
                      ['S','F','C','S'],
                      ['A','D','E','E']
                    ], 'SEEEE');

console.log(result);