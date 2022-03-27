/**
 * LeetCode 509 https://leetcode.com/problems/fibonacci-number/
 */

class Solution {
    public int fib(int n) {
        // DP
        int fibNminus2 = 0;
        int fibNminus1 = 1;
        int res  = 0;
        
        for (int i = 2 ; i <= n; i++) {
            res = fibNminus1 + fibNminus2;
            fibNminus2 = fibNminus1;
            fibNminus1 = res;
        }
        
        return n == 1 ? 1 : res;
        
    }
}