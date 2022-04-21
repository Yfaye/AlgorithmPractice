/**
 * LeetCode 46 https://leetcode.com/problems/permutations/submissions/
 */


class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new LinkedList<>();
        LinkedList<Integer> track = new LinkedList<>();
        
        boolean[] used = new boolean[nums.length];
        
        backtrack(nums,track,used, res);
        return res;
    }
    
    void backtrack(int[] nums, LinkedList<Integer> track, boolean[] used, List<List<Integer>> res) {
        if (track.size() == nums.length) {
            res.add(new LinkedList(track));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            
            track.add(nums[i]);
            used[i] = true;
            
            backtrack(nums, track, used, res);
            
            track.removeLast();
            used[i] = false;
        }
    }
}