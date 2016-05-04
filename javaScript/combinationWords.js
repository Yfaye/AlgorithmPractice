/*
You're given a vector of vectors of words, e.g.: 
[['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']]. 

Write a generalized function that prints all combinations of one word from the first vector, one word from the second vector, etc.
NOTE: the number of vectors and number of elements within each vector may vary.

For the input above, it should print (in any order): 
quick brown fox 
quick brown dog 
quick black fox 
quick black dog */

/**
* @param {string[][]} words
* @return {string[]}
*/
var combinationWords = function(words){
	var results = [];
	var path = [];

	var dfsHelper = function(words, results, path, row) {
		//base case
		if (path.length === words.length) {
			results.push(path.slice(0).join(' '));
			return;
		}

		if (row > words.length - 1) {
			return;
		}

		//recursive case
		for (var i = 0; i < words[row].length; i++) {
			path.push(words[row][i]);
			arguments.callee(words, results, path, row + 1);
			path.pop(path.length - 1);
		}
	}

	dfsHelper(words, results, path, 0);
	console.table(results);
	return results;
};

combinationWords([['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']]);

/*
quick brown fox,quick brown dog,quick black fox,quick black dog,quick grey fox,quick grey dog,lazy brown fox,lazy brown dog,lazy black fox,lazy black dog,lazy grey fox,lazy grey dog
*/