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
import edu.princeton.cs.algs4.Stack;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

/**
 *  The {@code Solver} solves the n-puzzles using A* search.
 *  @author Fei Yan
 */

public class Solver {
    private MinPQ<searchNode> iniGameTree = new MinPQ<searchNode>(manhattanOrder());
    private MinPQ<searchNode> twGameTree = new MinPQ<searchNode>(manhattanOrder());
    private Queue<Board> result = new Queue<Board>();
    //private Queue<Board> shadow = new Queue<Board>();
    private boolean solved;
    private int moves;
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

        Board twin = initial.twin();

        iniGameTree.insert(new searchNode(initial, 0, null)); // initial board game tree PQ
        twGameTree.insert(new searchNode(twin, 0, null)); // twin board game tree PQ

        while ( (twGameTree.min().curBoard.isGoal() == false) && (iniGameTree.min().curBoard.isGoal() == false)) {
            searchNode a = iniGameTree.delMin();
            searchNode b = twGameTree.delMin();

            //result.enqueue(a.curBoard);
            for (Board nb : a.curBoard.neighbors()) {
                if ((a.pre != null) && (nb.equals(a.pre.curBoard))) continue;
                iniGameTree.insert(new searchNode(nb, a.curMoves + 1, a));
            }

            //shadow.enqueue(b.curBoard);
            for (Board nb : b.curBoard.neighbors()) {
                if ((b.pre != null) && (nb.equals(b.pre.curBoard))) continue;
                twGameTree.insert(new searchNode(nb, b.curMoves + 1, b));
            }
        }

        //result.enqueue(iniGameTree.min().curBoard);
        //shadow.enqueue(twGameTree.min().curBoard);
        Stack<Board> resultStack = new Stack<Board>();


        if (iniGameTree.min().curBoard.isGoal() == true) {
            solved = true;
            moves = iniGameTree.min().curMoves;

            searchNode last = iniGameTree.min();
            searchNode prev = last.pre;

            while(prev != null) {
                resultStack.push(last.curBoard);
                last = prev;
                prev = last.pre;
            }

            resultStack.push(last.curBoard);

            while(!resultStack.isEmpty()) {
                result.enqueue(resultStack.pop());
            }

        } else {
            solved = false;
            moves = -1;
            result = null;
        }

        iniGameTree = null;
        twGameTree = null;
        resultStack = null;
    }

    /**
     * nested class searchNode
     * containning current board, current moves, and previous search node
     */
    private class searchNode implements Comparable<searchNode>{
        private Board curBoard;
        private int curMoves;
        private searchNode pre;

        //Construct a searchNode;
        public searchNode(Board currentBoard, int currentMoves, searchNode previous) {
            this.curBoard = currentBoard;
            this.curMoves = currentMoves;
            this.pre = previous;
        }

        public int compareTo(searchNode that) {
            if (that == null) {
                throw new java.lang.NullPointerException("The input searchNode are null");                
            }

            int thisP  = this.curBoard.manhattan() + this.curMoves;
            int thatP = that.curBoard.manhattan() + that.curMoves;

            if (thisP > thatP) {
                return 1;
            } else if (thisP < thatP) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    /**
     * Compares two searchNode by the Manhattan priority of this Node.
     * The Manhattan priority is defined as in the manhattan() method in Board Class.
     *
     * @return the Comparator that defines this ordering on searchNode
     */
    private Comparator<searchNode>  manhattanOrder() {
        return new Comparator<searchNode>() {
            @Override
            public int compare(searchNode a, searchNode b) {
                //return a.curBoard.manhattan() - b.curBoard.manhattan();
                return a.compareTo(b);
            }
        };
    }

    /**
     * @return true if the initial board is solvable, false otherwise;
     */    
    public boolean isSolvable() {
        return solved;
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

    //solve a slider puzzle
    // public static void main(String[] args) {
    //     // create initial board from file
    //     In in = new In(args[0]);
    //     int n = in.readInt();
    //     int[][] blocks = new int[n][n];
    //     for (int i = 0; i < n; i++)
    //         for (int j = 0; j < n; j++)
    //             blocks[i][j] = in.readInt();
    //     Board initial = new Board(blocks);

    //     // solve the puzzle
    //     Solver solver = new Solver(initial);

    //     // print solution to standard output
    //     if (!solver.isSolvable())
    //         StdOut.println("No solution possible");
    //     else {
    //         StdOut.println("Minimum number of moves = " + solver.moves());
    //         for (Board board : solver.solution())
    //             StdOut.println(board);
    //     }       
    // }
}