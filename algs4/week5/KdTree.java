/******************************************************************************
 *  Compilation:  javac KdTree.java
 *  Execution:    java KdTree filename1.txt
 *  Dependencies: Point2D.java RectHV.java
 *
 *  This program creates an initial KdTree from an n-by-n array of blocks.
 *
 ******************************************************************************/

import java.util.TreeSet;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.Point2D;
import edu.princeton.cs.algs4.RectHV;
import edu.princeton.cs.algs4.Queue;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdDraw;
import edu.princeton.cs.algs4.In;
/**
 *  The {@code KdTree} class creates mutable data type that 
 *  represents a set of points in the unit square. 
 *  @author Fei Yan
 */

public class KdTree {
   private TreeSet<Point2D> s;

   /**
    * construct an empty set of points
    * inserted points would be ordered by its x-ordinate;
    */   
   public KdTree() {
      s = new TreeSet<Point2D>(Point2D.X_ORDER);
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
      if (!s.contains(p)) {
         s.add(p);
      }
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
         if (t.distanceTo(p) < nearest) {
            nearest = t.distanceTo(p);
            n = t;
         }
      }
      return n;
   }

   // unit testing of the methods (optional) 
   public static void main(String[] args) {
   }               
}
