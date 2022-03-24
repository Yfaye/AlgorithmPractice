/**
 * LeetCode 59 https://leetcode.com/problems/spiral-matrix-ii/
 */

class Solution {
    public int[][] generateMatrix(int n) {
        if (n == 0) {
            return new int[0][0];
        }
        
        int[][] matrix = new int[n][n];
        
        int upper_bound = 0;
        int lower_bound = n - 1;
        int left_bound = 0;
        int right_bound = n - 1;
        
        // number to fill in the matrix
        int num = 1;
        
        while(num <= n*n) {
            // filling upper bound line from left to right
            if (upper_bound <= lower_bound) {
                for (var i = left_bound; i <= right_bound; i++) {
                    //System.out.println(upper_bound);
                    matrix[upper_bound][i] = num++;
                }
                upper_bound++;
            }
            
            // filling right bound line from top down
            if (right_bound >= left_bound) {
                for (var i = upper_bound; i <= lower_bound; i++) {
                    System.out.println(right_bound);
                    matrix[i][right_bound] = num++;
                }
                right_bound--;
            }
            
            // filling lower bound line from right to left
            if (lower_bound >= upper_bound) {
                for (var i = right_bound; i >= left_bound; i--) {
                    matrix[lower_bound][i] = num++;
                }
                lower_bound--;
            }
            
            // filling left bound line from bottom up
            if (left_bound <= right_bound) {
                for (var i = lower_bound; i >= upper_bound; i--) {
                    matrix[i][left_bound] = num++;
                }
                left_bound++;
            }
        }
        
        return matrix;
        
    }
}