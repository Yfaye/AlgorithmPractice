/******************************************************************************
 *  Compilation:  javac Board.java
 *  Execution:    java Board filename1.txt filename2.txt ...
 *  Dependencies: Stack.java
 *
 *  This program creates an initial board from an n-by-n array of blocks.
 *
 ******************************************************************************/

import java.util.Iterator;
import java.lang.Math;
import java.lang.StringBuilder;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.Stack;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

/**
 *  The {@code Board} class creates board containing an n-by-n array of blocks.
 *  @author Fei Yan
 */


public class Board {
    private int[][] blocks;
    private int dimension;  // the board dimension
    private int blankAtRow; // the row index of the blank square
    private int blankAtCol; // the column index of the blank square
    // private final int[][] goal;

    /**
     * construct a board from an n-by-n array of blocks
     * (where blocks[i][j] = block in row i, column j)
     */
    public Board(int[][] blocks) {
        if ( blocks == null ) {
            throw new java.lang.NullPointerException("The input blocks are null");
        }

        if ( blocks.length == 0 || (blocks.length != blocks[0].length) ) {
            throw new java.lang.IllegalArgumentException("The input blocks are not square nor empty");
        }

        this.dimension = blocks.length;

        this.blocks = new int[this.dimension][this.dimension];

        for (int i = 0; i < this.dimension; i++) {
            for (int j = 0; j < this.dimension; j++) {
                this.blocks[i][j] = blocks[i][j];
                if (this.blocks[i][j] == 0) {
                    blankAtRow = i;
                    blankAtCol = j;
                }
            }
        }
    }
    
    /**
     * @return the board dimension n
     */ 
    public int dimension() {
        return dimension;
    }

    /**
     * @return the number of blocks out of place
     */ 
    public int hamming() {
        int hammingValue = 0;
        for (int i = 0; i < this.dimension; i++) {
            for (int j = 0; j < this.dimension; j++) {
                if (this.blocks[i][j] == 0) {
                    continue;
                }
                if (this.blocks[i][j] != (i * this.dimension + j + 1)) {
                    hammingValue++;
                }
            }
        }
        return hammingValue;
    }

    /**
     * @return sum of Manhattan distances between blocks and goal
     */                    
    public int manhattan() {
        int manhattanValue = 0;
        int rowDiff = 0;
        int colDiff = 0;
        for (int i = 0; i < this.dimension; i++) {
            for (int j = 0; j < this.dimension; j++) {
                if (this.blocks[i][j] == 0) {
                    continue;
                }
                if (this.blocks[i][j] != (i * this.dimension + j + 1)) {
                    rowDiff = Math.abs((this.blocks[i][j] - 1) / dimension - i);
                    colDiff = Math.abs((this.blocks[i][j] - 1) % dimension - j);
                    manhattanValue += (rowDiff + colDiff);
                }
            }
        }
        return manhattanValue;
    }  

    /**
     * @return true if this board is the goal board, false otherwise;
     */ 
    public boolean isGoal() {
        for (int i = 0; i < this.dimension; i++) {
            for (int j = 0; j < this.dimension; j++) {
                if (this.blocks[i][j] == 0) {
                    continue;
                }
                if (this.blocks[i][j] != (i * this.dimension + j + 1)) {
                    return false;
                }
            }
        }
        return true;
    }             
    /**
     * @return a board that is obtained by exchanging any pair of blocks
     */ 
    public Board twin() {
        int[][] tmp = new int[dimension][dimension];
        for (int i = 0; i < this.dimension; i++) {
            for (int j = 0; j < this.dimension; j++) {
                tmp[i][j] = this.blocks[i][j];
            }
        }

        int[][] change = {{-1, 0},{0, 1}, {1, 0}, {0, -1}};
        boolean found = false;
        for (int i = 0; i < this.dimension && !found; i++) {
            for (int j = 0; j < this.dimension && !found; j++) {
                if (this.blocks[i][j] == 0) {
                    continue;
                }
                for (int k = 0; k < change.length; k++) {
                    int tmpRow = i + change[k][0];
                    int tmpCol = j + change[k][1];

                    if (isValid(tmpRow) && isValid(tmpCol) && tmp[tmpRow][tmpCol] != 0 ) {
                        int t = tmp[i][j];
                        tmp[i][j] = tmp[tmpRow][tmpCol];
                        tmp[tmpRow][tmpCol] = t;
                        found = true;
                        break;
                    }
                }
            }
        }
        return new Board(tmp);
    }

    /**
     * @return true if this board equal to y, false otherwise
     */ 
    public boolean equals(Object y) {
        if ( y == this) return true;
        if ( y == null ) return false;
        if ( y.getClass() != this.getClass() ) return false;

        Board other = (Board) y;

        if (this.dimension != other.dimension) {
            return false;
        }
        for (int i = 0; i < this.dimension; i++) {
            for (int j = 0; j < this.dimension; j++) {
                if (this.blocks[i][j] != other.blocks[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * @return a stack containing all neighboring boards
     */ 
    public Iterable<Board> neighbors() {

        Stack<Board> nb = new Stack<Board>();

        int[][] tmp = new int[dimension][dimension];
        for (int i = 0; i < this.dimension; i++) {
            for (int j = 0; j < this.dimension; j++) {
                tmp[i][j] = this.blocks[i][j];
            }
        }

        int[][] change = {{-1, 0},{0, 1}, {1, 0}, {0, -1}};

        for (int k = 0; k < change.length; k++) {
            int tmpBlankAtRow = blankAtRow + change[k][0];
            int tmpBlankAtCol = blankAtCol + change[k][1];

            if (isValid(tmpBlankAtRow) && isValid(tmpBlankAtCol)) {
                tmp[blankAtRow][blankAtCol] = tmp[tmpBlankAtRow][tmpBlankAtCol];
                tmp[tmpBlankAtRow][tmpBlankAtCol] = 0;
                nb.push(new Board(tmp));
                //restore the unchanged board
                tmp[tmpBlankAtRow][tmpBlankAtCol] = tmp[blankAtRow][blankAtCol];
                tmp[blankAtRow][blankAtCol] = 0;
            }
        }

        return nb;
    }

    /**
     * @return true if the index is within bounds
     */ 
    private boolean isValid(int idx) {
        if (idx < 0 || idx > dimension - 1) {
            return false;
        }
        return true;
    }

    /**
     * @return string representation of this board (in the output format specified below)
     */ 
    public String toString() {
        StringBuilder s = new StringBuilder();
        s.append(dimension + "\n");
        for (int i = 0; i < dimension; i++) {
            for (int j = 0; j < dimension; j++) {
                s.append(String.format("%2d ", this.blocks[i][j]));
            }
            s.append("\n");
        }
        return s.toString();
    } 


    // unit tests (not graded)
    // public static void main(String[] args) {
    //     // for each command-line argument
    //     for (String filename : args) {

    //         // read in the board specified in the filename
    //         In in = new In(filename);
    //         int n = in.readInt();
    //         int[][] tiles = new int[n][n];
    //         for (int i = 0; i < n; i++) {
    //             for (int j = 0; j < n; j++) {
    //                 tiles[i][j] = in.readInt();
    //             }
    //         }

    //         // create the goal 
    //         int[][] goal = new int[n][n];
    //         int tmpBlock = 1;
    //         for (int i = 0; i < n; i++) {
    //             for (int j = 0; j < n; j++) {
    //                 goal[i][j] = tmpBlock++;
    //             }
    //         }
    //         goal[n - 1][n - 1] = 0;


    //         // test Board
    //         Board initial = new Board(tiles);
    //         Board ideal = new Board(goal);

    //         System.out.println("Test isGoal methord on ideal should return true: " + ideal.isGoal());

    //         for (Board nb : initial.neighbors()) {
    //             System.out.println(nb);
    //             System.out.println("Hamming value is: " + nb.hamming());
    //             System.out.println("manhattan value is: " + nb.manhattan());
    //             System.out.println("Test equals methord: " + nb.equals(initial));
    //             System.out.println("Test isGoal methord: " + nb.isGoal());
    //             System.out.println("And one of its twins is listed below:");
    //             System.out.println(nb.twin());
    //         }
    //     }
    // }
}
