// 441. Arranging Coins   QuestionEditorial Solution  My Submissions
// Total Accepted: 3470
// Total Submissions: 9353
// Difficulty: Easy
// Contributors: Admin
// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

// Tag Binary Search Math

public class Solution {
    public int arrangeCoins(int n) {
        if (n <= 0) {
            return 0;
        }
        
        if (n < 3) {
            return 1;
        } 
        
        int k = 0;
        
        while (n > k + 1) {
            n = n - k;
            if ( n < k + 1) {
                break;
            }
            k++;
        }
        
        return k;
        
    }
}


//binary search 可以在logN 时间内找到
// 使用公式可以实现 O（1），但需要小心溢出


