/**
 * LeetCode 54 https://leetcode.com/problems/spiral-matrix/
 */

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return new LinkedList<Integer>();
        }
        
        int row = matrix.length; 
        int col = matrix[0].length;
        int upper_bound = 0; 
        int lower_bound = row - 1;
        int left_bound = 0; 
        int right_bound = col - 1;
        
        LinkedList<Integer> res = new LinkedList<>();
        
        while (res.size() < row * col) {
            // adding upper_bound line from left to right
            if (upper_bound <= lower_bound) {
                for (var i = left_bound; i <= right_bound; i++) {
                    res.add(matrix[upper_bound][i]);
                }
                upper_bound++;
            }
            
            // adding right_bound line from top down
            if (right_bound >= left_bound) {
                for (var i = upper_bound; i <= lower_bound; i++) {
                    res.add(matrix[i][right_bound]);
                }
                right_bound--;
            }
            
            // adding lower_bound line from right to left
            if (lower_bound >= upper_bound) {
                for (var i = right_bound; i >= left_bound; i--) {
                    res.add(matrix[lower_bound][i]);
                }
                lower_bound--;            }
            
            // adding left_bound line from bottom up
            if (left_bound <= right_bound) {
                for (var i = lower_bound; i >= upper_bound; i--) {
                    res.add(matrix[i][left_bound]);
                }
                left_bound++;
            }
        }
        
        return res;
    }
} 