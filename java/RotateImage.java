/**
 * LeetCode 48 https://leetcode.com/problems/rotate-image/
 */
class Solution {
    public void rotate(int[][] matrix) {        
        if ( matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }
        
        int n = matrix.length;
        
       // diagonal mirroring from left top to right bottom
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                int tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
            }
        }
        
        
        // reverse each row
        for (int i = 0; i < n; i++) {
            reverseRow(matrix[i]);
        }
        
        return;
        
    }
    
    private void reverseRow(int[] row) {
        int front = 0;
        int end = row.length - 1;
        
        while (front < end ) {            
            int tmp = row[front];
            row[front] = row[end];
            row[end] = tmp;
            
            front++;
            end--;
        }
        return;
    }
}