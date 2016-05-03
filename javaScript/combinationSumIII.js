/*
216. Combination Sum III  
Total Accepted: 30878 Total Submissions: 86323 Difficulty: Medium

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Ensure that numbers within the set are sorted in ascending order.

Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]


Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	var results = [];
	var path = [];

	var dfsHelper = function(k, n, results, path, pos) {
		//base case
		if ( k === 0) {
			if (n === 0) {
				results.push(path.slice(0));				
			}
			return;
		}

		//recursive case
		for (var i = pos; i < 10; i++) {
			//pruning
			if ( i > n) {
				break;
			}

			path.push(i);
			arguments.callee(k - 1, n - i, results, path, i + 1);
			path.pop(path.lenght - 1);
		}
	}

	dfsHelper(k, n, results, path, 1);
	console.table(results);
	return results;   
};
combinationSum3(3, 9);

/*
1,2,4
*/
/*
1,2,6,1,3,5,2,3,4
*/