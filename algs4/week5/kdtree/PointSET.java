/******************************************************************************
 *  Compilation:  javac PointSET.java
 *  Execution:    java PointSET filename1.txt
 *  Dependencies: java.util.TreeSet;
 *
 *  This program creates an initial PointSET from an n-by-n array of blocks.
 *
 ******************************************************************************/

import java.util.TreeSet;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.Point2D;
import edu.princeton.cs.algs4.RectHV;
import edu.princeton.cs.algs4.Queue;
import edu.princeton.cs.algs4.SET;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdDraw;
import edu.princeton.cs.algs4.In;
/**
 *  The {@code PointSET} class creates mutable data type that 
 *  represents a set of points in the unit square. 
 *  @author Fei Yan
 */

public class PointSET {
   //private TreeSet<Point2D> s;
    private final SET<Point2D> s = new SET<Point2D>();

   /**
    * construct an empty set of points
    * inserted points would be ordered by its x-ordinate;
    */   
   public PointSET() {
      //s = new TreeSet<Point2D>(Point2D.X_ORDER);
   }

   /**
    * @return true if the set is empty; @return false other wise
    */   
   public boolean isEmpty() {
      return s.isEmpty();
   }

   /**
    * @return the number of points in the set 
    */   
   public int size() {
      return s.size();
   }

   /**
    * add the point to the set (if it is not already in the set)
    */    
   public void insert(Point2D p) {
      if (p == null) {
         throw new java.lang.NullPointerException("inserting a null point");
      }
      if (s.contains(p)) {
        return;
      }
      s.add(p);
   }

   /**
    * @return true if the set contain point p; @return false other wise
    */ 
   public boolean contains(Point2D p) {
      if (p == null) {
         throw new java.lang.NullPointerException("null point passed to contains methods");
      }
      return s.contains(p);
   }

   /**
    * draw all points to standard draw
    */   
   public void draw() {
      StdDraw.setPenColor(StdDraw.BLACK);
      StdDraw.setPenRadius(.01);
      for (Point2D p : s) {
         p.draw();
      }
   }

   /**
    * @return all points that are inside the rectangle;
    */ 
   public Iterable<Point2D> range(RectHV rect) {
      if (rect == null) {
         throw new java.lang.NullPointerException("null rect passed to range methods");
      }
      Queue<Point2D> inRec = new Queue<Point2D>();
      for (Point2D p : s) {
         if (rect.contains(p)) {
            inRec.enqueue(p);
         }
      }
      return inRec;
   }

   /**
    * @return a nearest neighbor in the set to point p; null if the set is empty 
    */ 
   public Point2D nearest(Point2D p) {
      if (p == null) {
         throw new java.lang.NullPointerException("null point passed to nearest methods");
      }
      Double nearest = Double.MAX_VALUE;
      Point2D n = null;
      for (Point2D t : s) {
         if (p.distanceTo(t) < nearest) {
            nearest = p.distanceTo(t);
            n = t;
         }
      }
      return n;
   }

   // unit testing of the methods (optional) 
   // public static void main(String[] args) {
        // String filename = args[0];
        // In in = new In(filename);

        // StdDraw.enableDoubleBuffering();

        // // initialize the data structures with point from standard input
        // PointSET brute = new PointSET();
        // while (!in.isEmpty()) {
        //     double x = in.readDouble();
        //     double y = in.readDouble();
        //     Point2D p = new Point2D(x, y);
        //     brute.insert(p);
        // }

        // while (true) {

        //     // the location (x, y) of the mouse
        //     double x = StdDraw.mouseX();
        //     double y = StdDraw.mouseY();
        //     Point2D query = new Point2D(x, y);

        //     // draw all of the points
        //     StdDraw.clear();
        //     StdDraw.setPenColor(StdDraw.BLACK);
        //     StdDraw.setPenRadius(0.01);
        //     brute.draw();

        //     // draw in red the nearest neighbor (using brute-force algorithm)
        //     StdDraw.setPenRadius(0.03);
        //     StdDraw.setPenColor(StdDraw.RED);
        //     brute.nearest(query).draw();
        // }
   // }               
}
