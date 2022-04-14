/**
 * LeetCode 559 https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 */

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    /**
    *  Recursion
    */
        public int maxDepth(Node root) {
            if (root == null) {
                return 0;
            }
            
            int depth = 0;
            for (Node child : root.children) {
                depth = Math.max(maxDepth(child), depth);
            }
            
            return depth + 1;
        } 
        
    /**
    * Traverse
    */
        
         int depth = 0;
         int res = 0;
         public int maxDepth(Node root) {
             traverse(root);
             return res;
        }
        
        public void traverse(Node node) {
             if (node == null) {
                 return;
             }
             
             depth++;
             res = Math.max(depth, res);
            
             for (Node child : node.children) {
                 traverse(child);
             }
            
             depth--;
        }
        
    /**
    *  BFS with Queue
    */
            public int maxDepth(Node root) {
                if (root == null) {
                    return 0;
                }
                
                Queue<Node> q = new LinkedList<>();
                q.offer(root);
                
                int depth = 0;
                while (!q.isEmpty()) {
                    int sz = q.size();
                    for (int i = 0; i < sz; i++) {
                        Node cur = q.poll();
                        for (Node child : cur.children) {
                            q.offer(child);
                        }
                    }
                    depth++;
                }
                return depth;
            }
    }
