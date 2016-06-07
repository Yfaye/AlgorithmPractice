/*
38. Count and Say
Total Accepted: 83828 Total Submissions: 284204 Difficulty: Easy

The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string. 
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	var mem = [];
	mem[0] = '1';
	mem[1] = '1';

	//base case
	if (n < 0) {
		return mem[0];
	}

	//check the cheat sheet
	if (mem[n] !== undefined) {
		return mem[n];
	}

	//recursive case
	var prev = arguments.callee(n-1);
	var curr = '';
    var i = 0;
    var prevLength = prev.length;
    var count = 1;
    for (; i < prevLength; i++ ) {
    	var cur = prev[i];
    	while (cur === prev[i+1]) {
    		count++;
    		i++;
    	}
    	curr = curr + count + prev[i];
    	count = 1;
    }
    mem[n] = curr;
    return curr;    
};

countAndSay(5);
/*
111221
*/
countAndSay(6);
/*
312211
*/