/******************************************************************************
 *  Compilation:  javac Point.java
 *  Execution:    java Point
 *  Dependencies: none
 *  
 *  An immutable data type for points in the plane.
 *  For use on Coursera, Algorithms Part I programming assignment.
 *
 ******************************************************************************/

import java.util.Comparator;
import edu.princeton.cs.algs4.StdDraw;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;

public class Point implements Comparable<Point> {
    private final int x;     // x-coordinate of this point
    private final int y;     // y-coordinate of this point

    /**
     * Initializes a new point.
     *
     * @param  x the <em>x</em>-coordinate of the point
     * @param  y the <em>y</em>-coordinate of the point
     */
    public Point(int x, int y) {
        /* DO NOT MODIFY */
        this.x = x;
        this.y = y;
    }

    /**
     * Draws this point to standard draw.
     */
    public void draw() {
        /* DO NOT MODIFY */
        StdDraw.point(x, y);
    }

    /**
     * Draws the line segment between this point and the specified point
     * to standard draw.
     *
     * @param that the other point
     */
    public void drawTo(Point that) {
        /* DO NOT MODIFY */
        StdDraw.line(this.x, this.y, that.x, that.y);
    }

    /**
     * Returns the slope between this point and the specified point.
     * Formally, if the two points are (x0, y0) and (x1, y1), then the slope
     * is (y1 - y0) / (x1 - x0). For completeness, the slope is defined to be
     * +0.0 if the line segment connecting the two points is horizontal;
     * Double.POSITIVE_INFINITY if the line segment is vertical;
     * and Double.NEGATIVE_INFINITY if (x0, y0) and (x1, y1) are equal.
     *
     * @param  that the other point
     * @return the slope between this point and the specified point
     */
    public double slopeTo(Point that) {
        /* YOUR CODE HERE */
       /* double slope;
        if (y == that.y && x == that.x) {
            slope = Double.NEGATIVE_INFINITY;
        } else if (x == that.x) {
            slope = Double.POSITIVE_INFINITY;
        } else if (y == that.y) {
            slope = +0.0;
        } else {
            slope = ((that.y - y) + 0.0)/(that.x - x); 
        }

        return slope;
        */
        if (this.y - that.y == 0) {
            if (this.x - that.x == 0) {
                return Double.NEGATIVE_INFINITY;
            }
            return +0;
        } else if (this.x - that.x == 0) {
            return Double.POSITIVE_INFINITY;
        }
        return (that.y - this.y) / (double) (that.x - this.x);

    }

    /**
     * Compares two points by y-coordinate, breaking ties by x-coordinate.
     * Formally, the invoking point (x0, y0) is less than the argument point
     * (x1, y1) if and only if either y0 < y1 or if y0 = y1 and x0 < x1.
     *
     * @param  that the other point
     * @return the value <tt>0</tt> if this point is equal to the argument
     *         point (x0 = x1 and y0 = y1);
     *         a negative integer if this point is less than the argument
     *         point; and a positive integer if this point is greater than the
     *         argument point
     */
    public int compareTo(Point that) {
        /* YOUR CODE HERE */
        /*
        if (y < that.y || ((y == that.y) && (x < that.x))) {
            return -1;
        } else if ((y == that.y) && (x == that.x)) {
            return 0;
        } else {
            return 1;
        }
        */
        int diff = this.y - that.y;
        if (diff == 0) {
            diff = this.x - that.x;
        }
        return diff;
    }

    /**
     * Compares two points by the slope they make with this point.
     * The slope is defined as in the slopeTo() method.
     *
     * @return the Comparator that defines this ordering on points
     */
    public Comparator<Point> slopeOrder() {
        /* YOUR CODE HERE */
        return new Comparator<Point>() {
            @Override
            public int compare(Point a, Point b) {
                double slopeDiff = slopeTo(a) - slopeTo(b);
                if (slopeDiff == 0) {
                    return 0;
                } else if (slopeDiff > 0) {
                    return 1;
                } else {
                    return -1;
                }
            }
        };
    }

    /**
     * Returns a string representation of this point.
     * This method is provide for debugging;
     * your program should not rely on the format of the string representation.
     *
     * @return a string representation of this point
     */
    public String toString() {
        /* DO NOT MODIFY */
        return "(" + x + ", " + y + ")";
    }

    /**
     * Unit tests the Point data type.
     */
    public static void main(String[] args) {
        /* YOUR CODE HERE */
       /* Point a = new Point(1,3);
        Point b = new Point(2,4);
        Point c = new Point(5,6);
        List<Point> dots = Arrays.asList(
            new Point(1,3),
            new Point(2,4),
            new Point(3,3),
            new Point(4,5)
        );
        //for (Point dot : dots) {
        //    dot.draw();
        //}
        Collections.sort(dots, a.slopeOrder());
        System.out.println(dots);
        Collections.sort(dots);
        System.out.println(dots);
        */
    }
}