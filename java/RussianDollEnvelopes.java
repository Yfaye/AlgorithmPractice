/**
 * LeetCode 354 https://leetcode.com/problems/russian-doll-envelopes/
 */

// O(n^2) TLE :(
class Solution {
    public int maxEnvelopes(int[][] envelopes) {
        // invalid case
        if (envelopes == null || envelopes.length == 0) {
            return 0;
        }
        
        // sorting envelopes: width: small -> large; same width: hight large -> small
        Arrays.sort(envelopes, new Comparator<int[]>(){
            public int compare(int[] a, int[] b) {
                return a[0] == b[0] ? b[1] - a[1] : a[0] - b[0];
            }
        });
        
        // generate hight array and get longest increasing subsequence of the hight array
        int[] height = new int[envelopes.length];
        for (int i = 0; i < envelopes.length; i++) {
            height[i] = envelopes[i][1];
        }
        
        return getLIS(height);
    }
    
    public int getLIS(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);
        
        int res = 1;
        
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[j] + 1, dp[i]);
                }
            }
            res = Math.max(res, dp[i]);   
        }
        
        return res;
    }
}