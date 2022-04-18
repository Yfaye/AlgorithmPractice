/**
 *  LeetCode 463 https://leetcode.com/problems/island-perimeter/
 * 
 */

class Solution {
    public int islandPerimeter(int[][] grid) {
        if (grid == null || grid.length == 0) {
            return 0;
        }
        
        
        // find island staring point
        int row = 0;
        int col = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    row = i;
                    col = j;
                    break;
                }
            }
        }
        
        // BFS from grid[row][col]
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{row,col});
        
        // init perimeter
        int perimeter = 0;
        
        // init visited record 
        int[][] visited = new int[grid.length][grid[0].length];
        for (int m = 0; m < grid.length; m++) {
            for (int n = 0; n < grid[0].length; n++ ) {
                visited[m][n] = 0;
            }
        }
        
        while (!q.isEmpty()) {
            int sz = q.size();
            for (int k = 0; k < sz; k++) {
                int[] cur = q.poll();
                int tmpRow = cur[0];
                int tmpCol = cur[1];
                
                // check up
                if (tmpRow - 1  < 0 ) { // board
                    perimeter += 1;
                } else if (grid[tmpRow - 1][tmpCol]  == 0) { // water
                    perimeter += 1;
                } else if (grid[tmpRow - 1][tmpCol] == 1) {
                    if (visited[tmpRow - 1][tmpCol] == 0) {
                        q.offer(new int[]{tmpRow-1, tmpCol});
                        visited[tmpRow-1][tmpCol] = 1;
                    }
                }
                    
                    
                // check down
                if (tmpRow + 1 > grid.length - 1 ) { // board
                    perimeter += 1;
                } else if (grid[tmpRow + 1][tmpCol] == 0) { // water
                    perimeter += 1;
                } else if (grid[tmpRow+1][tmpCol] == 1) {
                    if (visited[tmpRow+1][tmpCol] == 0) {
                        q.offer(new int[]{tmpRow + 1, tmpCol});
                        visited[tmpRow+1][tmpCol] = 1;
                    }
                }
                    
                // check left
                if (tmpCol - 1 < 0 ) { // board
                    perimeter += 1;
                } else if (grid[tmpRow][tmpCol-1] == 0) { // water
                    perimeter += 1;
                } else if (grid[tmpRow][tmpCol-1] == 1) {
                    if (visited[tmpRow][tmpCol-1] == 0) {
                        q.offer(new int[]{tmpRow, tmpCol - 1});
                        visited[tmpRow][tmpCol-1] = 1;
                    }
                }
                
                // check right
                if (tmpCol + 1 > grid[0].length - 1) {// board
                    perimeter += 1;
                } else if (grid[tmpRow][tmpCol+1] == 0) { // water
                    perimeter += 1;
                } else if (grid[tmpRow][tmpCol+1] == 1) {
                    if (visited[tmpRow][tmpCol+1] == 0) {
                        q.offer(new int[]{tmpRow, tmpCol + 1});
                        visited[tmpRow][tmpCol+1] = 1;
                    }
                }
                
                // completed checking, added it to visited
                visited[tmpRow][tmpCol] = 1;
            }
        }
                    
        return perimeter;
    }
}
