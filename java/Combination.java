/**
 * LeetCode 77 https://leetcode.com/problems/combinations/submissions/
 */

class Solution {
    List<List<Integer>> res = new LinkedList<>();
    LinkedList<Integer> path = new LinkedList<>();
    public List<List<Integer>> combine(int n, int k) {
        backtrack(n, k, 1);
        return res;
    }
    
    void backtrack(int n, int k, int startIndex) {
        // base case
        if (path.size() == k) {
            res.add(new LinkedList(path));
        }
        
        for (int i = startIndex; i <= n; i++ ) {  // prune skill:  i <= n - (k - path.size()) + 1
            path.add(i);
            
            backtrack(n, k, i+1);
            
            path.removeLast();
        }
    }
}
