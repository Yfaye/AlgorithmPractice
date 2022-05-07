/**
 * LeetCode 40 https://leetcode.com/problems/combination-sum-ii/
 */

 // Rely on startIndex to avoid duplicate case

class Solution {
    List<List<Integer>> res = new LinkedList<>();
    LinkedList<Integer> path = new LinkedList<>();
    
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        backtrack(candidates, target, 0, 0);
        return res;
    }
    
    void backtrack(int[] candidates, int target, int sum, int startIndex) {
        // base case
        if (sum == target) {
            res.add(new LinkedList(path));
            return;
        }
        
        for (int i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) { // prune
            // duplicate case
            if (i > startIndex && candidates[i] == candidates[i-1]) {
                continue;
            }
            
            sum += candidates[i];
            path.add(candidates[i]);
            backtrack(candidates, target, sum, i + 1);
            path.removeLast();
            sum -= candidates[i];
        }
    }
}

// Rely on boolean[] used to avoid duplicate case

class Solution {
    List<List<Integer>> res = new LinkedList<>();
    LinkedList<Integer> path = new LinkedList<>();
    
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        boolean[] used = new boolean[candidates.length];
        Arrays.sort(candidates);
        backtrack(candidates, target, used, 0, 0);
        return res;
    }
    
    void backtrack(int[] candidates, int target, boolean[] used, int sum, int startIndex) {
        // base case
        if (sum == target) {
            res.add(new LinkedList(path));
            return;
        }
        
        for (int i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            // duplicate case
            // !!!! Mistakes were made here by missing i > 0 and caused ArrayIndexOutOfRange Exception
            if (i > 0 && candidates[i] == candidates[i-1] && used[i-1] == false) { // prune
                continue;
            }
            
            sum += candidates[i];
            path.add(candidates[i]);
            used[i] = true;
            backtrack(candidates, target, used, sum, i + 1);
            used[i] = false;
            path.removeLast();
            sum -= candidates[i];
        }
    }
    
}