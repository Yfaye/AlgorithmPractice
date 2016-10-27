/******************************************************************************
 *  Compilation:  javac Board.java
 *  Execution:    java Board filename1.txt filename2.txt ...
 *  Dependencies: Board.java Solver.java
 *
 *  This program creates an initial board from an n-by-n array of blocks.
 *
 ******************************************************************************/

import java.util.Iterator;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

/**
 *  The {@code Board} class creates board containing an n-by-n array of blocks.
 *  @author Fei Yan
 */


public class Board {
	private final int[][] blocks;
	private final int dimension;
	private final int[][] goal;

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
    		}
    	}
    	int tmpBlock = 1;

    	// create the goal 
    	for (int i = 0; i < this.dimension; i++) {
    		for (int j = 0; j < this.dimension; j++) {
    			this.goal[i][j] = tmpBlock++;
    		}
    	}
    	goal[dimension - 1][dimension - 1] = 0;
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
    			if (this.board[i][j] != this.goal[i][j]) {
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
    			if (this.board[i][j] != this.goal[i][j]) {
    				rowDiff = Math.abs((this.board[i][j] - 1) / col - i);
    				colDiff = Math.abs((this.board[i][j] - 1) % col - j);
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
    	return equals(goal);
    }             
    /**
     * @return a board that is obtained by exchanging any pair of blocks
     */ 
    public Board twin() {

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
    			if (this.board[i][j] != other.board[i][j]) {
    				return false;
    			}
    		}
    	}
    	return true;
    }

    /**
     * @return all neighboring boards
     */ 
    public Iterable<Board> neighbors() {

    }

    /**
     * @return string representation of this board (in the output format specified below)
     */ 
    public String toString() {

    } 


    // unit tests (not graded)
    public static void main(String[] args) {

    }
}
