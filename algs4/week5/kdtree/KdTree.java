/******************************************************************************
 *  Compilation:  javac KdTree.java
 *  Execution:    java KdTree filename1.txt
 *  Dependencies: Point2D.java RectHV.java
 *
 *  This program creates an initial KdTree from an n-by-n array of blocks.
 *
 ******************************************************************************/

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
    private int size = 0;
    private static class Node {
       private Point2D p;      // the point
       private RectHV rect;    // the axis-aligned rectangle corresponding to this node
       private Node lb;        // the left/bottom subtree
       private Node rt;        // the right/top subtree
        
       public Node(Point2D p) {
            this.p = p;
            rect = null;
            lb = null; 
            rt = null;
       }
    }
    private Node root;

   /**
    * construct an empty set of points
    * inserted points would be ordered by its x-ordinate;
    */   
   public KdTree() {
   }

   /**
    * @return true if the set is empty; @return false other wise
    */   
   public boolean isEmpty() {
      return root == null;
   }

   /**
    * @return the number of points in the set 
    */   
   public int size() {
      return size();
   }

   /**
    * add the point to the set (if it is not already in the set)
    */    
   public void insert(Point2D p) {
      if (p == null) {
         throw new java.lang.NullPointerException("inserting a null point");
      }
      if (isEmpty()) {
         root = new Node(p);
         root.rect = new RectHV(0, 0, 1, 1);
         size++;
         return;
      }

      root = put(root, p, true);    
   }

   // recursivly putting node into the 2dTree
   private Node put(Node x, Point2D p, boolean d) {
      if (x == null) {
        size++;
        return new Node(p);
      }

      if (x.p.equals(p)) {
        return x;
      }

      int diff = compare(p, x.p, d);

      boolean nextd = !d;

      if (diff < 0) {
        x.lb = put(x.lb, p, nextd);
        if (x.lb.rect == null) {
          if (d) {
            x.lb.rect = new RectHV(x.rect.xmin(), x.rect.ymin(), x.p.x(), x.rect.ymax());
          } else {
            x.lb.rect = new RectHV(x.rect.xmin(), x.rect.ymin(), x.rect.xmax(), x.p.y());
          }
        }
      } else {
        x.rt = put(x.rt, p, nextd);
        if (x.rt.rect == null) {
          if (d) {
            x.rt.rect = new RectHV(x.p.x(), x.rect.ymin(), x.rect.xmax(), x.rect.ymax());
          } else {
            x.rt.rect = new RectHV(x.rect.xmin(), x.p.y(), x.rect.xmax(), x.rect.ymax());
          }
        }
      }
      return x;
   }

   private int compare(Point2D a, Point2D b, boolean d) {
      if (d) {
        return Double.compare(a.x(), b.x());
      } else {
        return Double.compare(a.y(), b.y());
      }
   }

   /**
    * @return true if the set contain point p; @return false other wise
    */ 
   public boolean contains(Point2D p) {
      if (p == null) {
         throw new java.lang.NullPointerException("null point passed to contains methods");
      }
      return contains(root, p, true);
   }

   // recursive method
   private boolean contains (Node x, Point2D p, boolean d) {
       if (x == null) {
        return false;
       }

       if (x.p.equals(p)) {
        return true;
       }

       int diff = compare(p, x.p, d);
       boolean nextd = !d;

       if (diff < 0) {
          return contains(x.lb, p, nextd);
       } else {
          return contains(x.rt, p, nextd);
       }
   }

   /**
    * draw all points to standard draw
    */   
   public void draw() {
      draw(root, true);
   }


   //recursive method
   private void draw(Node x, boolean d) {
      if (x == null) {
        return;
      }
      StdDraw.setPenColor(StdDraw.BLACK);
      StdDraw.setPenRadius(0.01);
      x.p.draw();

      if (d) {
        StdDraw.setPenColor(StdDraw.RED);
        StdDraw.setPenRadius(0.001);
        StdDraw.line(x.p.x(), x.rect.ymin(), x.p.x(), x.rect.ymax());
      } else {
        StdDraw.setPenColor(StdDraw.BLUE);
        StdDraw.setPenRadius(0.001);
        StdDraw.line(x.rect.xmin(), x.p.y(), x.rect.xmax(), x.p.y());
      }

      boolean nextd = !d;
      draw(x.lb, nextd);
      draw(x.rt, nextd);
   }

   /**
    * @return all points that are inside the rectangle;
    */ 
   public Iterable<Point2D> range(RectHV rect) {
      if (rect == null) {
         throw new java.lang.NullPointerException("null rect passed to range methods");
      }
      Queue<Point2D> inRec = new Queue<Point2D>();

      if (!isEmpty()) {
        findInRec(inRec, rect, root);
      }
 
      return inRec;
   }

   //recursive method
   private void findInRec(Queue<Point2D> q, RectHV r, Node x) {
      if (!r.intersects(x.rect)) {
          return;
      }

      if (r.contains(x.p)) {
        q.enqueue(x.p);
      }

      if (x.lb != null) {
        findInRec(q, r, x.lb);
      }

      if (x.rt != null) {
        findInRec(q, r, x.rt);
      }
   }

   /**
    * @return a nearest neighbor in the set to point p; null if the set is empty 
    */ 
   public Point2D nearest(Point2D p) {
      if (p == null) {
         throw new java.lang.NullPointerException("null point passed to nearest methods");
      }

      if (isEmpty()) {
          return null;
      }

      return findNearest(root, p, root.p, Double.MAX_VALUE, true);
   }

   // recursive method
   private Point2D findNearest(Node x, Point2D p, Point2D n, double shortest, boolean d) {
      if (x == null) {
        return n;
      }

      Point2D closer = n;
      double shorter = shortest;
      double distance = x.p.distanceSquaredTo(p);
      if (distance < shortest) {
          closer = x.p;
          shorter = distance;
      }

      Node a, b;
      if (d) {
        if (p.x() < x.p.x()) {
          a = x.lb;
          b = x. rt;
        } else {
          a = x.rt;
          b = x.lb;
        }
      } else {
        if (p.y() < x.p.y()) {
          a = x.lb;
          b = x.rt;
        } else {
          a = x.rt;
          b = x.lb;
        }
      }

      boolean nextd = !d;

      if (a != null && a.rect.distanceSquaredTo(p) < shorter) {
        closer = findNearest(a, p, closer, shorter, nextd);
        shorter = closer.distanceSquaredTo(p);
      }

      if (b != null && b.rect.distanceSquaredTo(p) < shorter) {
        closer = findNearest(b, p, closer, shorter, nextd);
      }

      return closer;
   }

   // unit testing of the methods (optional) 
   //public static void main(String[] args) {
   //}               
}
