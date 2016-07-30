/*375. Guess Number Higher or Lower II  QuestionEditorial Solution  My Submissions
Total Accepted: 1777
Total Submissions: 6256
Difficulty: Medium
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.

However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.

Example:

n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.
Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.

Show Hint 
Credits:
Special thanks to @agave and @StefanPochmann for adding this problem and creating all test cases.
*/
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
	var money = 0;
	var start = 1;
	var end = n;

	while (start + 1 < end) {
		var mid = Math.floor(start + (end - start)/2);
		money += mid;
		start = mid;
	}
	money += end;

	return money;    
}; //Wrong!

//初步想法：二分法是最快而且能最快找到target的方法，所以其实本题就是不断的二分，并且把每次的mid值存起来。
//code的过程中遇到的问题是： 当第二次二分的时候，mid是取前面一半的mid还是后面一半的mid呢？谁大取谁！这是用贪心，可能是有风险的。是不是应该把每步的钱都存起来，然后最后比较？
//本题还牵扯到博弈论，如果是10的话，最后的答案是16，我算出来的是39……嗯，还是有问题

//由于看完博弈论以后还是没有头绪，所以去网上google了一下答案，原来这道题跟二分法其实没有什么关系了。这是零和问题，最坏情况里的最小值问题，就是miniMax，极小化极大算法 和 纳什均衡（用于非零和问题）
//但本题不用管那些极小化极大之类的，本题的DP思路是这个样子的。
//假设我第一次猜了x，这个X不是答案，那么我们要保证猜对的钱是 x + Max(guarantee(1,x-1), guarantee(x+1, n));
//对1到N的每一个值都运行一遍这个，存最大的那个，就是保证猜对的需要的钱数。
//而guarantee(x,y)的算法与上面的算法类似，所以本题是要算一个表，这个表里存有1到n之间，任意两个数之间，猜中所需的最小钱数，然后返回这个表的dp[1][n]。

/*状态转移方程：

dp[i][j] = min(k + max(dp[i][k - 1], dp[k + 1][j]))
其中dp[i][j]表示猜出范围[i, j]的数字需要花费的最少金额。
*/

var getMoneyAmount = function(n) {
	//corner case
	if (n <= 1) {
		return 0;
	}
	var dp = [];

	for (var L = n - 1; L > 0; L--) {
		dp[L] = [];
		for (var R = L + 1; R <= n; R++) {
			dp[L][R] = 0x7FFFFFFF; //INT_MAX
			for (var i = L; i < R; i++) {
				dp[L][R] = Math.min(dp[L][R], i + Math.max(dp[L][i - 1], dp[i + 1][R]));
			}
		}
	}
	return dp[1][n];

};

/*
网上看到的这个解答很明白

这个题其实和博弈没什么关系。感觉跟气球那个题更像。

首先说minmax:
对猜数字的人来说，猜测可以有不同的策略（比如顺序猜、二分等等），这个策略跟target是几没有关系。但对每个策略，根据target不同可能产生不同的代价。
minmax里的max是指给定一个策略，需要考虑最坏情况。例如假设你的策略是顺序猜，应该考虑要猜的数是n的可能性。min是指在所有可能的策略中，取最坏情况最小的一种作为最优策略。
所以你要求的是min_{所有策略} （max_{所有target} 这个策略和这个target所产生的代价）

然后说dp:
把要猜的数的范围从1-n推广到p-q。那么对每个pair (p, q)，都有一个minmax cost，假设这个是一个函数C(p, q)。这就是我们要计算的dp数组。
很显然地如果p>=q，也就是范围里只有0-1个数，则不产生代价。
当p<q时，假设第一次猜的是x，则可以根据target所在范围分三种情况，按照问题定义各自产生不同的代价。这里我们还是求minmax：给定x，我们需要考虑所有target的最坏情况，在最外层需要考虑所有x的取值，选其中代价最小的一个（最优策略）。

希望对lz有帮助。

策略不是指一个数字序列，因为数字序列没有利用A的回答排除掉一些范围。虽然策略本身不依赖于target，但因为策略也考虑A的response，所以策略产生的结果（也就是每次猜什么数）当然是和target有关的。

对这个题合理的策略对应一棵1-n的BST，每个node是一次猜测，根结点对应B第一次猜测的数。然后根据A的回答可以排除掉当前node一侧的所有数，所以如果回答<就向左走，>就向右走，跟在BST里搜target是一样的。

所以换个表述，可以认为这个题是问，所有存了1-n的BST里，最大路径和最小的的BST是哪棵。
*/