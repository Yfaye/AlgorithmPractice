/*77. Combinations   My Submissions QuestionEditorial Solution
Total Accepted: 74800 Total Submissions: 217255 Difficulty: Medium
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	//corner case
	if (n < k) {
		return null;
	}

	//initialize
	var results = [];
	var path = [];

	//dfs function
	var dfsHelper = function(n, k, results, path, prev) {
		//base case
		if (k === 0) {
			results.push(path.slice(0));
			return;
		}
		
		//recursive case
		for (var i = n; i >= 1; i--) {
			//pruning
			if ( i >= prev) {
				continue;
			}
			path.push(i);
			dfsHelper (n - 1, k - 1, results, path, i);
			path.pop(path.length - 1);
		}
	}

	dfsHelper(n, k, results, path);
	console.table(results);
	return results;    
};

combine(4,2);
/*
4,3,4,2,4,1,3,3,3,2,3,1,2,3,2,2,2,1,1,3,1,2,1,1
*/
/*
4,3,4,2,4,1
*/
/*
2,3,1,3,1,2
*/
/*
2,3,1,3,1,2
*/