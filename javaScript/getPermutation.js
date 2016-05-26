/*60. Permutation Sequence
Total Accepted: 55122 Total Submissions: 217216 Difficulty: Medium

The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

    "123"
    "132"
    "213"
    "231"
    "312"
    "321"

Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

//This solution will give: Time Limit Exceeded 
var getPermutation = function(n, k) {
	var results = [];
	var path =[];

	var dfsHelper = function(n, results, path){
		//base case
		if (path.length === n) {
			results.push(path.slice(0).join(''));
			return;
		}

		//recursive case
		for (var i = 1; i <= n; i++) {
			if (path.indexOf(i) !== -1) {
				continue;
			}
			path.push(i);
			arguments.callee(n, results, path);
			path.pop();
		}
	};

	dfsHelper(n, results, path);
	console.table(results);
	return results[k-1];
};
getPermutation(9,94626);
/*
348567921
*/
getPermutation(8,15485);

/*
41623857
*/
