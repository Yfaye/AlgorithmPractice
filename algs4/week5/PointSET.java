/******************************************************************************
 *  Compilation:  javac PointSET.java
 *  Execution:    java PointSET filename1.txt filename2.txt ...
 *  Dependencies: java.util.TreeSet;
 *
 *  This program creates an initial PointSET from an n-by-n array of blocks.
 *
 ******************************************************************************/

import java.util.Iterator;
import java.util.TreeSet;
import java.lang.Math;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.Point2D;
import edu.princeton.cs.algs4.RectHV;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

/**
 *  The {@code PointSET} class creates mutable data type that 
 *  represents a set of points in the unit square. 
 *  @author Fei Yan
 */

public class PointSET {
   public         PointSET()                               // construct an empty set of points 
   public           boolean isEmpty()                      // is the set empty? 
   public               int size()                         // number of points in the set 
   public              void insert(Point2D p)              // add the point to the set (if it is not already in the set)
   public           boolean contains(Point2D p)            // does the set contain point p? 
   public              void draw()                         // draw all points to standard draw 
   public Iterable<Point2D> range(RectHV rect)             // all points that are inside the rectangle 
   public           Point2D nearest(Point2D p)             // a nearest neighbor in the set to point p; null if the set is empty 

   // unit testing of the methods (optional) 
   public static void main(String[] args) {

   }               
}
