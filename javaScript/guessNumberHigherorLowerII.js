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
};
//初步想法：二分法是最快而且能最快找到target的方法，所以其实本题就是不断的二分，并且把每次的mid值存起来。
//code的过程中遇到的问题是： 当第二次二分的时候，mid是取前面一半的mid还是后面一半的mid呢？谁大取谁！这是用贪心，可能是有风险的。是不是应该把每步的钱都存起来，然后最后比较？
//本题还牵扯到博弈论，如果是10的话，最后的答案是16，我算出来的是39……嗯，还是有问题