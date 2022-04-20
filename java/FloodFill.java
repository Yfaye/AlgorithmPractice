/**
 * LeetCode 733 https://leetcode.com/problems/flood-fill/
 */

class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if (image == null || image.length == 0 || image[0].length == 0 || image[sr][sc] == newColor) {
            return image;
        }
        
        int row = image.length;
        int col = image[0].length;
        
        Queue<int[]> q = new LinkedList<>();
        int oldColor = image[sr][sc];
        
        q.offer(new int[]{sr,sc});
        
        while(!q.isEmpty()) {
            int[] cur = q.poll();
            int i = cur[0];
            int j = cur[1];
            
            image[i][j] = newColor;
            
            // check up
            if (i-1 >= 0 && image[i-1][j] == oldColor) {
                q.offer(new int[]{i-1, j});
            }
            
            // check down
            if (i+1 < row && image[i+1][j] == oldColor) {
                q.offer(new int[]{i+1, j});
            }
            
            // check left
            if (j-1 >= 0 && image[i][j-1] == oldColor) {
                q.offer(new int[]{i, j-1});
            }
            
            // check right
            if (j+1 < col && image[i][j+1] == oldColor) {
                q.offer(new int[]{i, j+1});
            }
        }
        return image;       
    }
}
