/**
 * LeetCode 322 https://leetcode.com/problems/coin-change/
 */

class Solution {
    public int coinChange(int[] coins, int amount) {
        if (coins.length == 0 || amount < 0) {
            return -1;
        }
        
        // for x amount, int[x] is the fewest coin number to get that x amount
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount+1);
        
        // base case
        dp[0] = 0;
        
        // checking against all status
        for (var i = 0; i < amount + 1; i++) {
            // checking against all choices
            for (int coin : coins) {
                // invalid
                if ( i - coin < 0) {
                    continue;
                }
                dp[i] = Math.min(dp[i-coin] + 1, dp[i]);
            }
        }
        
        return dp[amount] == amount + 1 ? -1 : dp[amount] ;
    }
} 