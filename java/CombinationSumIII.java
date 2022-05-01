/**
 * LeetCode 216 https://leetcode.com/problems/combination-sum-iii/
 * 
 */

class Solution {
    List<List<Integer>> res = new LinkedList<>();
    LinkedList<Integer> path = new LinkedList<>();
    
    public List<List<Integer>> combinationSum3(int k, int n) {
        backtrack(k, n, 1, 0);
        return res;
    }
    
    void backtrack(int k, int n, int startIndex, int sum) {
        // prune
        if (n < sum) {
            return;
        }
        
        //base case
        if (path.size() == k && sum == n) {
            res.add(new LinkedList(path));
            return;
        }
        
        for (int i = startIndex; i <= 9 - (k - path.size()) + 1; i++) { // another prune
            sum+= i;
            path.add(i);
            backtrack(k, n, i+1, sum);
            sum-=i;
            path.removeLast();
        }
    }
}