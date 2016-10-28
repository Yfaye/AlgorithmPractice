/******************************************************************************
 *  Compilation:  javac Solver.java
 *  Execution:    java Solver filename1.txt filename2.txt ...
 *  Dependencies: Board.java
 *
 *  This program creates an initial board from an n-by-n array of blocks.
 *
 ******************************************************************************/
import java.util.Comparator;
import java.util.Iterator;
import java.lang.Math;
import java.lang.StringBuilder;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.MinPQ;
import edu.princeton.cs.algs4.Queue;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

/**
 *  The {@code Solver} solves the n-puzzles using A* search.
 *  @author Fei Yan
 */

public class Solver {
	private int moves; //min number of moves to solve initial board
	private MinPQ<searchNode> gameTree = new MinPQ<searchNode>(manhattanOrder());
	private Queue<Board> result = new Queue<Board>();
	/**
     * construct a a solution to the initial board 
     * (using the A* algorithm)
     * with the Manhattan priority
     */
    public Solver(Board initial) {
    	if ( initial == null ) {
    		throw new java.lang.NullPointerException("The input board are null");
    	}

    	if ( initial.dimension() == 0 ) {
    		throw new java.lang.IllegalArgumentException("The input board is empty");
    	}
    	moves = -1;
    	gameTree.insert(new searchNode(initial, moves, null));

    	while (!gameTree.isEmpty()) {
    		searchNode tmp = gameTree.delMin();
    		moves++;
    		result.enqueue(tmp.curBoard);
    		for (Board nb : tmp.curBoard.neighbors()) {
    			if ((tmp.pre != null) && (nb.equals(tmp.pre.curBoard))) continue;
    			gameTree.insert(new searchNode(nb, moves + 1, tmp));
    		}
    	}
    }

    /**
     * nested class searchNode
     * containning current board, current moves, and previous search node
     */
    private class searchNode {
    	private Board curBoard;
    	private int curMoves;
    	private searchNode pre;

    	//Construct a searchNode;
    	public searchNode(Board currentBoard, int currentMoves, searchNode previous) {
    		this.curBoard = currentBoard;
    		this.curMoves = currentMoves;
    		this.pre = previous;
    	}
    }

	/**
     * Compares two searchNode by the Manhattan priority of this Node.
     * The Manhattan priority is defined as in the manhattan() method in Board Class.
     *
     * @return the Comparator that defines this ordering on searchNode
     */
    public Comparator<searchNode>  manhattanOrder() {
        return new Comparator<searchNode>() {
            @Override
            public int compare(searchNode a, searchNode b) {
            	return a.curBoard.manhattan() - b.curBoard.manhattan();
            }
        };
    }

	/**
     * @return true if the initial board is solvable, false otherwise;
     */    
    public boolean isSolvable() {
    	return true;
    }

	/**
     * @return min number of moves to solve initial board; -1 if unsolvable;
     */   
    public int moves() {
    	return moves;
    }

	/**
     * @return sequence of boards in a shortest solution; null if unsolvable;
     */   
    public Iterable<Board> solution() {
    	if (isSolvable() == false) {
    		return null;
    	}
    	return result;

    }

    // solve a slider puzzle
    public static void main(String[] args) {
	    // create initial board from file
	    In in = new In(args[0]);
	    int n = in.readInt();
	    int[][] blocks = new int[n][n];
	    for (int i = 0; i < n; i++)
	        for (int j = 0; j < n; j++)
	            blocks[i][j] = in.readInt();
	    Board initial = new Board(blocks);

	    // solve the puzzle
	    Solver solver = new Solver(initial);

	    // print solution to standard output
	    if (!solver.isSolvable())
	        StdOut.println("No solution possible");
	    else {
	        StdOut.println("Minimum number of moves = " + solver.moves());
	        for (Board board : solver.solution())
	            StdOut.println(board);
	    }   	
    }
}