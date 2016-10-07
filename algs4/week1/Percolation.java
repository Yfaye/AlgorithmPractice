/******************************************************************************
 *  Compilation:  javac Percolation.java
 *  Execution:    java Percolation n
 *  Dependencies: algs4.WeightedQuickUnionUF 
 *
 *  This program takes the name of a file as a command-line argument.
 *  From that file, it
 *
 *    - Reads the grid size n of the percolation system.
 *    - Creates an n-by-n grid of sites (intially all blocked)
 *    - Reads in a sequence of sites (row i, column j) to open.
 *
 *  After each site is opened, it draws full sites in light blue,
 *  open sites (that aren't full) in white, and blocked sites in black,
 *  with with site (1, 1) in the upper left-hand corner.
 ******************************************************************************/

import edu.princeton.cs.algs4.WeightedQuickUnionUF;

/**
 *  The {@code Percolation} class provides a data type for modeling a percolation system.
 *  @author Fei Yan
 */
public class Percolation {
    private int[][] grid;
    private int N;
    private WeightedQuickUnionUF uf;
    private WeightedQuickUnionUF ufTop;
    /**
     * create n-by-n grid, with all sites blocked
     *  By convention, the row and column indices i and j are integers between 1 and n, where (1, 1) is the upper-left site:
     *  The constructor throws a java.lang.IllegalArgumentException if n <= 0.
     *  
     * @param  a integer n;
     */ 
    public Percolation(int n) {
        if (n <= 0) {
            throw new IllegalArgumentException("n need to be greater than 0");
        }
        this.N = n;
        grid = new int[N + 1][N + 1];
        for (int i = 0; i < N + 1; i++) {
            for (int j = 0; j < N + 1; j++) {
                grid[i][j] = 0;
            }
        }
        uf = new WeightedQuickUnionUF(N * N + 2); // 2 virtual dots for top and bottom
        ufTop = new WeightedQuickUnionUF(N * N + 1); // 1 virtual dot at top
        for (int i = 1; i <= N; i++) {
            uf.union(i, 0); // top row union to top virtual dot
            ufTop.union(i, 0);
            uf.union(N * N-i + 1, N * N+1); // bottom row union to bottom virtual dot
        }

    }

    /**
     * Returns true if the given params (row i, column j) are with in the valid range;
     *  By convention, the row and column indices i and j are integers between 1 and n, where (1, 1) is the upper-left site: 
     *  Throw a java.lang.IndexOutOfBoundsException if any argument is outside its prescribed range. 
     * @param  a integer i for the row index;
     * @param  a integer j for the column index;
     * @return {@code true} if i, j is in range; 
     */ 
    private boolean inRange(int i, int j) {
        if (i < 1 || i > N) {
            throw new IndexOutOfBoundsException("the row index is out of range");
        }
        if (j < 1 || j > N) {
            throw new IndexOutOfBoundsException("the column index is out of range");
        }
        return true;
    }

    /**
     * Return the 1D index of given params (row i, column j);
     *  By convention, the row and column indices i and j are integers between 1 and n, where (1, 1) is the upper-left site: 
     * @param  a integer i for the row index;
     * @param  a integer j for the column index;
     * @return {@code a} the index of 1D array for row i and col j; 
     */ 
    private int get1DIndex(int i, int j) {
        return (i - 1) * N + j;
    }

    /**
     * Union the given site (row i, column j) with its four neighbors;
     * @param  a integer i for the row index;
     * @param  a integer j for the column index;
     */ 
    private void unionNeighbor(int i, int j) {
        inRange(i,j);
        int siteIndex = get1DIndex(i,j);
        int[][] next = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
        for (int k = 0; k < next.length; k++) {
            int tx = i + next[k][0];
            int ty = j + next[k][1];
            if (tx >= 1 && tx <= N && ty >= 1 && ty <= N) {
          if (grid[tx][ty] == 1) {
            int neighborIndex = get1DIndex(tx, ty);
            uf.union(siteIndex, neighborIndex);
            ufTop.union(siteIndex, neighborIndex);           
          }
            }
        }
    }

    /**
     * Open site (row i, column j) if it is not open already
     *  By convention, the row and column indices i and j are integers between 1 and n, where (1, 1) is the upper-left site: 
     *  Throw a java.lang.IndexOutOfBoundsException if any argument is outside its prescribed range. 
     * @param  a integer i for the row index;
     * @param  a integer j for the column index;
     */ 
    public void open(int i, int j) {
          inRange(i, j);
            if (isOpen(i, j)) {
                return;
            }
            grid[i][j] = 1;
            unionNeighbor(i, j);
    }

    /**
     * Returns if the site (row i, column j) is open or not
     *  By convention, the row and column indices i and j are integers between 1 and n, where (1, 1) is the upper-left site: 
     *  Throw a java.lang.IndexOutOfBoundsException if any argument is outside its prescribed range. 
     * @param  a integer i for the row index;
     * @param  a integer j for the column index;
     * @return {@code true} if i, j is in range; {@code false} otherwise;
     */ 
    public boolean isOpen(int i, int j) {
        inRange(i, j);
      //StdOut.println("in Percolation with " + i + " " + j + "site value now is: " + grid[i][j]);
        return (grid[i][j] == 1);
    }

    /**
     * Returns if the site (row i, column j) is full or not -- full means connected to the top
     *  By convention, the row and column indices i and j are integers between 1 and n, where (1, 1) is the upper-left site: 
     *  Throw a java.lang.IndexOutOfBoundsException if any argument is outside its prescribed range. 
     * @param  a integer i for the row index;
     * @param  a integer j for the column index;
     * @return {@code true} if the site (row i, column j) is full; {@code false} otherwise;
     */ 
    public boolean isFull(int i, int j) {
        inRange(i,j);
        if (grid[i][j] == 0){
            return false;
        }
        int tmpIndex = get1DIndex(i, j);
        return ufTop.connected(tmpIndex, 0);
    }
    /**
     * Returns if the system percolates or not -- path from top to bottom
     *  By convention, the row and column indices i and j are integers between 1 and n, where (1, 1) is the upper-left site: 
     *  Throw a java.lang.IndexOutOfBoundsException if any argument is outside its prescribed range. 
     * @return {@code true} if system percolates; {@code false} otherwise;
    */  
    public boolean percolates() {
        if (N == 1) {
            return isOpen(1, 1);
        }
        return uf.connected(0, N*N+1);
   }

    // test client (optional)
    public static void main(String[] args) {
        Percolation percolation = new Percolation(5);
        percolation.open(1, 1);
        percolation.open(3, 3);
        percolation.open(5, 5);
        percolation.open(5, 1);
        percolation.open(4, 3);
        percolation.open(4, 1);
        percolation.open(3, 1);
        percolation.open(2, 2);
        percolation.open(1, 2);
        percolation.open(2, 3);
        percolation.open(4, 4);
        percolation.open(4, 5);
 
        System.out.println("is (5,1) full?:" + percolation.isFull(5, 1));
        System.out.println("is (5,5) full?:" + percolation.isFull(5, 5));
        System.out.println("is percolation?:" + percolation.percolates());
    } 
}