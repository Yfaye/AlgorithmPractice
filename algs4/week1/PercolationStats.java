/******************************************************************************
 *  Compilation:  javac PercolationStats.java
 *  Execution:    java PercolationStats n t
 *  Dependencies: Percolation.java
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
 *
 ******************************************************************************/

import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

/**
 *  The {@code PercolationStats} class provides a data type for estimating the percolation threshold.
 *  @author Fei Yan
 */
public class PercolationStats {
    private double[] trialsRes;
    private int trialsNum;

    /**
     * create n-by-n grid, perform trials independent experiments on an n-by-n grid
     * The constructor should throw a java.lang.IllegalArgumentException if either n <= 0 or trials <= 0.
     * record the threshold for each trial into the trialsRes array.
     * @param  a integer n for the grid size;
     * @param  a integer trials for how many tries;
     */ 
    public PercolationStats(int n, int trials) {
        if (n <= 0) {
            throw new IllegalArgumentException("n for grid size is not greater than 0");
        }
        if (trials <= 0) {
            throw new IllegalArgumentException("trials number is not greater than 0");
        }
        this.trialsNum = trials;
        this.trialsRes = new double[trialsNum];

        // starting the trials
        for (int i = 0; i < trialsNum; i++) {
            Percolation percolation = new Percolation(n);
            double curOpens = 0.0;
            while (!percolation.percolates()) {
                int row = StdRandom.uniform(n) + 1;
                int column = StdRandom.uniform(n) + 1;
                // StdOut.println(row +" " + column);
                if (!percolation.isOpen(row, column)) {
                    percolation.open(row, column);
                    curOpens += 1.0;
                }
            }
            trialsRes[i] = curOpens / (n * n);
        }

    }

    /**
    * @return sample mean of percolation threshold
    */
    public double mean() {
       return StdStats.mean(trialsRes);
    }

    /**
    * @return sample standard deviation of percolation threshold
    */
    public double stddev() {
        return StdStats.stddev(trialsRes);
    }

    /**
    * @return low endpoint of 95% confidence interval
    */
    public double confidenceLo() {
        return mean() - 1.96 * stddev() / Math.sqrt(trialsNum);
    }

    /**
    * @return high endpoint of 95% confidence interval
    */
    public double confidenceHi() {
        return mean() + 1.96 * stddev() / Math.sqrt(trialsNum);
    }

    // test client (described below)
    public static void main(String[] args) {
        if (args.length != 2) {
            return;
        }

        try {
            int n = Integer.parseInt(args[0]);
            int trials = Integer.parseInt(args[1]);

            PercolationStats percolationStats = new PercolationStats(n, trials);
            System.out.println("mean                    = "
                    + percolationStats.mean());
            System.out.println("stddev                  = "
                    + percolationStats.stddev());
            System.out.println("95% confidence interval = "
                    + percolationStats.confidenceLo() + ", "
                    + percolationStats.confidenceHi());
        } catch (NumberFormatException e) {
            System.out.println("please enter two integers seperted by space");
            return;
        }
    }
}