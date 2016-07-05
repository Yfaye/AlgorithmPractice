/*152. Maximum Product Subarray

    Total Accepted: 63679
    Total Submissions: 280143
    Difficulty: Medium

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6. */
/**
 * @param {number[]} nums
 * @return {number}
 */
 // 回想起之前解的contiguous sub array的max Sum 问题。先解决几个基本点：
 // 1. 是不是多阶段决策问题？
 //		感觉这个多阶段决策不太明显。但是确实取决于以前面位置为结束的subarray的值。
 //	2.朴素的递推关系： 到了这个位置了，如果乘上这个位置的值，比之前的它自己还小，那以此为结束的subarray的乘积，就应该只算这个位置的值。
 //
// 本题自己测试过程中，发现两个问题没有考虑
// 1.如果遇到0怎么办？如果这个值是0，会导致后面的值乘以它都是0，所以处理方法应该是，某个值为结束的subarray如果前面一个subarray的最大值是0，那么以这个值为结束的subarray的值就应当是它本身
// 2.如果遇到奇数个负数连续怎么办？ 如 [-6,-7,-8]。按我们之前的朴素算法，以-7结尾的subarray最大乘机是42，如果乘以-8，当然不如当前大，所以以-8为结尾的subarray最大乘积是-8，它本身。
//   可是这个答案不对：明显应该是 -7*-8 = 56。这种情况应该怎么考虑呢？
//  所以之前的朴素的递推关系，只考虑了值为正数的情况。如果值为负数，应该怎么考虑呢？ 
// 考虑来考虑去，最后去网上搜索的答案，原来我的解空间不够，如果值为负数，应该乘以它之前的最小product，这样可以得到这个位置的最大product……难怪只记最大值的时候，怎么改都不对。
// 之前的亮点：考虑到了要特殊处理负值，但是没有考虑到，需要乘以之前最小的小于0的product。

//debug 发现的巨大思维问题，在之前的maxSubArray中也出现过： 
// maxProductAt[i-1] * nums[i] >= nums[i] 总是搞成了 与 maxProductAt[i-1] 去比较! 所以这个case就会出问题：maxProduct([2,-5,-2,-4,3]); 当算到-4那里的时候，因为之前的最大值是20，最小值是-2，乘上-4以后， 8 还是小于20， 所以没有被考虑，而认为-4那里的最大值就是他本身，其实只要比这个数本身大就好，因为最不济，也是从这个最大值开始。
// 其实很不应该，
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	//corner case
	if (nums === null || nums.length === 0) {
		return 0;
	}

	//init
	var maxProductAt = [];
	var minProductAt = [];
	maxProductAt[0] = nums[0];
	minProductAt[0] = nums[0];

	//DP
	for (var i = 1; i < nums.length; i++) {		
		if (nums[i] >= 0) {
			// max
			if ((maxProductAt[i-1] !== 0) && (maxProductAt[i-1] * nums[i] >= nums[i])) {
				maxProductAt[i] =maxProductAt[i-1] * nums[i];		 
			} else {
				maxProductAt[i] = nums[i];
			}

			//min
			if ((minProductAt[i-1] !== 0) && (minProductAt[i-1] * nums[i] <= nums[i])) {
				minProductAt[i] = minProductAt[i-1] * nums[i];
			} else {
				minProductAt[i] = nums[i];
			}


		} else { //nums[i] < 0
			//max
			if ((minProductAt[i-1] !== 0) && (minProductAt[i-1] * nums[i] >= nums[i])) {
				maxProductAt[i] = minProductAt[i-1] * nums[i];
			} else {
				maxProductAt[i] = nums[i];
			}

			//min
			if ((maxProductAt[i-1] !== 0) && (maxProductAt[i-1] * nums[i] <= nums[i])) {
				minProductAt[i] = maxProductAt[i-1] * nums[i];
			} else {
				minProductAt[i] = nums[i];
			}
		}
		
		//console.log('maxProductAt[' + i +'] is ' + maxProductAt[i]);
	}
	var max = maxProductAt[0];
	for (var j = 1; j < maxProductAt.length; j++) {
		max = max >= maxProductAt[j] ? max : maxProductAt[j];
	}
  return max;
};
//maxProduct([-2,1,0,3,4,5,6,0,-1]);
//maxProduct([-1,0,0,0,0,0,-6,-7,-8,-9,-10]);
//maxProduct([-1,-1,-8,-9,-10]);
maxProduct([2,-5,-2,-4,3]);



// 这个解释我觉得很棒，很好懂
/*
The way I looked at this problem is as follows.
You have three choices to make at any position in array.
1. You can get maximum product by multiplying the current element with
    maximum product calculated so far.  (might work when current
    element is positive).
2. You can get maximum product by multiplying the current element with
    minimum product calculated so far. (might work when current
    element is negative).
3.  Current element might be a starting position for maximum product sub
     array

    so you have to maintain current maximum product and current
    minimum product.

curr_max_prod = A[0];
prev_max_prod = A[0];
prev_min_prod = A[0];
ans = A[0];
for i=1  to  n-1
{
     curr_max_prod = MAX ( prev_max_prod*A[i], 
                                                 prev_min_prod*A[i],
                                                 A[i] );

     curr_min_prod = MIN ( prev_max_prod*A[i], 
                                                 prev_min_prod*A[i],
                                                 A[i] );
     Ans = MAX(ans, curr_max_prod);
     prev_max_prod = curr_max_prod;
     prev_min_prod = curr_min_prod;
}
return ans;

Above algorithm requires O(n) time and constant space, very similar to Kadane's algorithm.
*/