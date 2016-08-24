/*386. Lexicographical Numbers  QuestionEditorial Solution  My Submissions
Total Accepted: 1290
Total Submissions: 5337
Difficulty: Medium
Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

*/

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        result.push(i);
    }
    return result.sort();
};

//js里面的sort默认就是用的lexicographical order, 所以上面解法肯定是解得出来，而且是对的，问题在于时间复杂度，这个是n + nlog(n) 也就是整体是nlog(n)的时间复杂度，会TLE。
//如果需要再优化，那就最多只能优化到O（N），因为总归是要生成一个数组出来，那也就是说在1个个push的时候，就要按顺序生成和push。
//另外因为题目提到了空间开销也要注意，所以意味着，可能也要放弃递归解法
//从循环的角度考虑了一下，发现如果光用循环做，循环的层数是跟N有关系的，这里应该很自然的想到可以用DFS了，所以之前的考虑也可能是错的，提到空间限制并不一定意味着需要放弃递归
//另外此题反应出DFS掌握得还是不够熟练，要再多加练习

//在讨论区看到关于DFS的神总结, 说得简直太好了
//The key idea is that you need to imagine there is a tree. When you traverse this tree in pre-order, then the results are already sorted lexicographically.

var lexicalOrder = function(n) {
    var result = [];
    if (n < 0) {
    	return result;
    }

    var dfs = function (val,level, n, result) {
    	if (val > n) {
    		return;
    	}
    	if (val > 0) {
     	    result.push(val);   	    
    	}

    	for (var i = (level === 0? 1:0); i <= 9; i++) {
    		arguments.callee(val * 10 + i, level+1, n, result);
    	}
    }

        dfs(0,0,n,result);


    return result;
};

// 上面的TLE，下面的AC了。都是DFS，都是抄的。

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let res = []
  for(let i = 1; i < 10; ++i) {
    if( !dfs(i, res, n) ) {
      break
    }
  }
  return res
};

function dfs (num, res, n) {
  if (num > n) {
    return false
  }
  res.push(num)
  for (let i = 0; i < 10; ++i) {
    if (!dfs(num * 10 + i, res, n) ){
      break
    }
  }
  return true;
}