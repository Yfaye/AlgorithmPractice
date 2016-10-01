/*200. Number of Islands  QuestionEditorial Solution  My Submissions
Total Accepted: 64557
Total Submissions: 212149
Difficulty: Medium
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Subscribe to see which companies asked this question

Tags Depth-first Search Breadth-first Search Union Find
Similar Problems (M) Surrounded Regions (M) Walls and Gates (H) Number of Islands II (M) Number of Connected Components in an Undirected Graph
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null || grid === undefined || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
	var row = grid.length;
	var col = grid[0].length;
	var n = row * col;

	var uf = union_find.createNew();
	uf.init(n + 1);

	//var next = [[-1,0],[0,1],[1,0],[0,-1]];
	var next = [[0,1],[1,0]];

	var isOne = function(u,v) {
		if ( u < 0 || v < 0 || u > row - 1 || v > col - 1 ) {
			return false;
		}
		if (grid[u][v] === "0"){
			return false;
		}
		return true;
	}


	for (let x = 0; x < row; x++) {
		for (let y = 0; y < col; y++) {
			let id = x * col + y;
			if (grid[x][y] === "0") {
				uf.union(id, n);
				//console.log("union 0");
				//console.log(uf.count);
				//console.log(uf.uf);
			}
			if (grid[x][y] === "1") {
				for (let k = 0; k < 2; k++) {
					var tx = x + next[k][0];
					var ty = y + next[k][1];
					if (isOne(tx, ty)) {
						let tId = tx * col + ty;
						uf.union(id,tId);
						//console.log(uf.count);
						//console.log(uf.uf);
					}
				}
			}
		}
	}

	return uf.count - 1;
    
};

var union_find = {
	createNew: function() {
		var ufObj = {
			uf:[],
			count:0
		};

		ufObj.init = function(n) {
			for (let i = 0; i < n; i++) {
				this.uf[i] = i;
			}
			this.count = n;
		};

		ufObj.find = function(p){
			while(this.uf[p] !== p) {
				var tmp = this.uf[p]
				this.uf[p] = this.uf[tmp];
				p = this.uf[p];
			}
			return p;
		};

		ufObj.union = function(p,q){
			var pBoss = this.find(p);
			var qBoss = this.find(q);
			if (pBoss === qBoss) { return; }
			this.uf[pBoss] = qBoss;  // 各种debug，结果是uf的实现错了……T_T, 之前写的是this.uf[p] = qBoss;  老师的话没有听进去啊，合并跟小弟无关，只跟老大哥有关
			this.count -= 1;
		}

		return ufObj;
	}
};
// Union Find Test
/*
var test = union_find.createNew();
test.init(10);
test.union(3,9);
test.union(4,6);
test.union(7,8);
test.union(9,1);
test.union(4,9);
test.find(4);
test.find(2);
test.find(7);
*/

//上面的解法跑过了34个case，但是因为有重复union的出现，所以用uf.count来计算，并不靠谱
// 34 / 47 test cases passed.
/*
Input:
["111","010","111"]
Output:
0
Expected:
1
*/
/*
Input:
["10111","10101","11101"]
Output:
-1
Expected:
1
*/

//终于发现了bug所在，并查集的实现写错了，用了半天时间。上面代码已AC

// 并查集遍历矩阵的时候不用四向遍历，只看右下就可以了，不然会有重复，虽然不影响结果。
