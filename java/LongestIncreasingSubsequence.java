/**
 * LeetCode 300 https://leetcode.com/problems/longest-increasing-subsequence/
 * 
 */

class Solution {
    public int lengthOfLIS(int[] nums) {
        // invalid case
        if (nums == null) {
            return 0;
        }
        
        // dp[i]: the length of longest increasing subsequence by int[i]
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);
        
        // init result
        int res = 1;
        // base case
        dp[0] = 1;
        
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[j] + 1, dp[i]);
                }
            }
            res = Math.max(dp[i], res); // keeping the record of max value of dp[i]
        }
        
        return res;
    }
}