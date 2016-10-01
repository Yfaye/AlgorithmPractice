// 130. Surrounded Regions  QuestionEditorial Solution  My Submissions
// Total Accepted: 63971
// Total Submissions: 377905
// Difficulty: Medium
// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// For example,
// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X

// Tags Breadth-first Search Union Find
// Similar Problems (M) Number of Islands (M) Walls and Gates

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	if (board === null || board === undefined || board.length === 0 || board[0].length === 0) { return;}
	var row = board.length;
	var col = board[0].length;
	var n = row * col;

	var uf = UNION_FIND.createNew();
	uf.init(n+1);

	//var next = [[-1,0],[0,1],[1,0],[0,-1]];
	var next = [[0,1],[1,0]];

	var isEdgeO = function(u,v) {
	    if (u < 0 || v < 0 || u > row - 1 || v > col - 1) {
			return false;
		}
		if (board[u][v] === "O" &&( u === 0 || v === 0 || u === row - 1 || v === col - 1)) {
			return true;
		}
		return false;		
	}
	
	var isO = function(u,v) {
	    if (u < 0 || v < 0 || u > row - 1 || v > col - 1) {
			return false;
		}
		if (board[u][v] === 'X') {
		    return false;
		}
		return true;
	}

	for (let x = 0; x < row; x++) {
		for (let y = 0; y < col; y++) {
			let id = x * col + y;
			if (board[x][y] === "X") { continue;}
			if (board[x][y] === "O") {
			    for (let k = 0; k < 2; k++) {
					tx = x + next[k][0];  //Debug 1: 这里的tx,ty都没有变量声明
					ty = y + next[k][1];
					if (isO(tx,ty)) {
					   let tid = tx * col + y; //Debug 2: 这里应该加ty，为什么写成y？导致正确的id没有被union
					   uf.union(tid, id);
					}
				}  
			}
			//console.log(uf.uf);
		}
	}


    var edgeO = new Set();
    for (let j = 0; j < col; j++) {
        let  arr = [0, row-1];
        for (i = 0; i < 2; i++) {
            if (isEdgeO(arr[i], j)) {
                edgeO.add(uf.find(arr[i]*col+j));
            }          
        }
    }
    
    for (let i = 0; i < row; j++) {  //Debug Final: 这里的J++，导致程序死循环，每次都TLE
        let  arr = [0, col-1];
        for (j = 0; j < 2; j++) {
            if (isEdgeO(i,arr[j])) {
                edgeO.add(uf.find(i*col+arr[j]));
            }          
        }
    }
    

	for (let i = 0; i < n; i++) {
		if (edgeO.has(uf.find(i))) { continue;}
		var r = Math.floor(i / col);
		var c = i % col;
		board[r][c] = "X";
	}

	return;

    
};

//本题目测，如果用Union Find做，需要扫两遍，第一遍把该union的union起来，然后第二遍把同一个union如果周围都是X的话，就把这个union里面的所有的值换成“X”
//这样根本解不出来，所谓没有被X包围的O，也就是是在4个边界的O，以及和在边界的O是一个union的O

var UNION_FIND = {
	createNew: function(){
		var ufObj = {
			uf:[],
			count:0
		};
		ufObj.init = function(n) {
			for (let i = 0; i < n; i++) {
				this.uf[i] = i;
			}
			count = n;
		}

		ufObj.find = function(p) {
			while(this.uf[p] !== p) {
				var tmp = this.uf[p];
				this.uf[p] = this.uf[tmp];
				p = this.uf[p];
			}
			return p;
		}

		ufObj.union = function(p,q) {
			var pBoss = this.find(p);
			var qBoss = this.find(q);
			if (pBoss === qBoss) {return;}
			this.uf[pBoss] = qBoss;
			count -= 1;
		}
		return ufObj;
	}
};

// 这题根本没有仔细过脑子想，有几点是需要注意的，整个大方向都错了

// 思考：只要将被包围的O和未被包围的O分开就好

// 方法

// 1、用并查集（Union-find set）来区分，然后对原数组更改即可
// 2、用BFS将与边缘O相邻的O（为被包围的O）全部变为#（或者其他符号），然后对原数组做相应更改

// 所以我总结下是不是如果是矩阵从头开始遍历union的话是不需要四向查询的(比如这道题和 number of islands i)，而随机遍历矩阵就需要四向查询比如nunber of islands ii

// 还有一点很重要： 先把联通块并到一起，再查四个边。

/*
30 / 58 test cases passed.
Status: Wrong Answer
Submitted: 0 minutes ago
Input:
["OOO","OOO","OOO"]
Output:
["XXX","XXX","XXX"]
Expected:
["OOO","OOO","OOO"]

27 / 58 test cases passed.
Input:
["OXXOX","XOOXO","XOXOX","OXOOO","XXOXO"]
Output:
["OXXOX","XXXXO","XXXXX","OXOXO","XXOXO"]
Expected:
["OXXOX","XXXXO","XXXOX","OXOOO","XXOXO"]
*/

// 以下是已经AC的答案， 上面的code，太多低级问题，浪费了大量时间Debug

var solve = function(board) {
	if (board === null || board === undefined || board.length === 0 || board[0].length === 0) { return;}
	var row = board.length;
	var col = board[0].length;
	var n = row * col;

	var uf = UNION_FIND.createNew();
	uf.init(n+2);

	//var next = [[-1,0],[0,1],[1,0],[0,-1]];
	var next = [[0,1],[1,0]];

	var isEdgeO = function(u,v) {
	    if (u < 0 || v < 0 || u > row - 1 || v > col - 1) {
			return false;
		}
		if (board[u][v] === "O" &&( u === 0 || v === 0 || u === row - 1 || v === col - 1)) {
			return true;
		}
		return false;		
	}
	
	var isO = function(u,v) {
	    if (u < 0 || v < 0 || u > row - 1 || v > col - 1) {
			return false;
		}
		if (board[u][v] === 'X') {
		    return false;
		}
		return true;
	}

	for (let x = 0; x < row; x++) {
		for (let y = 0; y < col; y++) {
			let id = x * col + y;
			if (board[x][y] === "X") { uf.union(id,n+1); continue;}
			if (board[x][y] === "O") {
			    for (let k = 0; k < 2; k++) {
					var tx = x + next[k][0];
					var ty = y + next[k][1];
					if (isO(tx,ty)) {
						//console.log("tx,ty are: "+tx + ", " + ty);
					   let tid = tx * col + ty;
						//console.log("tid,id are: "+tid + ", " + id);
					   uf.union(tid, id);
						 //console.log(uf.uf);
					}
				}  
			}
		}
	}


    for (let j = 0; j < col; j++) {
        let  arr = [0, row-1];
        for (i = 0; i < 2; i++) {
            if (isEdgeO(arr[i], j)) {
                let tmpId = arr[i]*col+j;
				uf.union(tmpId, n);
            }          
        }
    }
    
    for (let i = 0; i < row; i++) {
        let  arr = [0, col-1];
        for (j = 0; j < 2; j++) {
            if (isEdgeO(i,arr[j])) {
                let tmpId = i * col + arr[j];
				uf.union(tmpId,n)
            }          
        }
    }
    
	//console.log(uf.uf);

	for (let i = 0; i < n; i++) {
		if (uf.find(i) === n || uf.find(i) === n+1) { continue;}
		var r = Math.floor(i / col);
		var c = i % col;
		board[r][c] = "X";
	}

	return;

    
};

var UNION_FIND = {
	createNew: function(){
		var ufObj = {
			uf:[],
			count:0
		};
		ufObj.init = function(n) {
			for (let i = 0; i < n; i++) {
				this.uf[i] = i;
			}
			count = n;
		}

		ufObj.find = function(p) {
			while(this.uf[p] !== p) {
				var tmp = this.uf[p];
				this.uf[p] = this.uf[tmp];
				p = this.uf[p];
			}
			return p;
		}

		ufObj.union = function(p,q) {
			var pBoss = this.find(p);
			var qBoss = this.find(q);
			if (pBoss === qBoss) {return;}
			this.uf[pBoss] = qBoss;
			count -= 1;
		}
		return ufObj;
	}
};


// 本题有两个思路上的问题，导致浪费了很多时间
// 1. 没有被X围起来的O，就一定在四条边上。这个性质，一开始并没有发现，只一味想用搜索，但怎么确定周围都是X，却不知道该怎么操作。
// 2. 要先把连通量都找全，然后再把边界上的O找出来。之前我边把边界的O和某个特定值union起来，边把连通图找出来，最后导致混在一起，无法区别