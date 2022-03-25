/**
 * LeetCode 797 https://leetcode.com/problems/all-paths-from-source-to-target/
 */

class Solution {
    List<List<Integer>> res = new LinkedList<>();
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        LinkedList<Integer> path = new LinkedList<>();
        traverse(graph, 0, path);
        return res;
    }
    
    private void traverse(int[][] graph, int start, LinkedList<Integer> path) {
        path.addLast(start);
        
        if (start == graph.length - 1) {
            res.add(new LinkedList(path));
            path.removeLast();
            return;
        }
        
        for (int n : graph[start]) {
            traverse(graph, n, path);
        }
        
        path.removeLast();
    }
}