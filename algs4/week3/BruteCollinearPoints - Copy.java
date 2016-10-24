/******************************************************************************
 *  Compilation:  javac BruteCollinearPoints.java
 *  Execution:    java BruteCollinearPoints
 *  Dependencies: Point.java LineSegment.java
 *  
 *  This class examines 4 points at a time and checks whether 
 *  they all lie on the same line segment, returning all such line segments.
 *
 ******************************************************************************/
import java.util.Arrays;
import edu.princeton.cs.algs4.StdDraw;

public class BruteCollinearPoints {
	private LineSegment[] allSeg; // All segments containing 4 points
	private Point[] sortedPoints; //
	private int lineIdx; //

    /**
     * Constructor: finds all line segments containing 4 points
     *
     * @param  array of Points that need to be checked
     * 
     */
    public BruteCollinearPoints(Point[] points) {
    	if (points == null) {
    		throw new java.lang.NullPointerException("The argument to the constructor is null");
    	}
    	checkDuplicatedPoints(points);

    	// copy the points array
    	for (int i = 0; i < points.length; i++) {
    		if (points[i] == null) {
    			throw new java.lang.NullPointerException("The point is null");
    		}
    		sortedPoints[i] = points[i];
    	}
    	Arrays.sort(sortedPoints); 
    	lineIdx = 0;

    	for (int i = 0; i < sortedPoints.length - 3; i++) {
    		for (int j = i + 1; j < sortedPoints.length - 2; j++) {
    			for (int k = j + 1; k < sortedPoints.length - 1; k++) {
    				for (int h = k + 1; h < sortedPoints.length; h++) {
    					if((sortedPoints[i].slopeTo(sortedPoints[j]) == sortedPoints[j].slopeTo(sortedPoints[k]))
    						&& (sortedPoints[j].slopeTo(sortedPoints[k]) == sortedPoints[k].slopeTo(sortedPoints[h]))) {
    							allSeg[lineIdx] = new LineSegment(sortedPoints[i], sortedPoints[h]);
    							lineIdx++;
    					}
    				}
    			}
    		}
    	}
    } 

    /**
     * Check if the argument contains a repeated point
     * Throw a java.lang.IllegalArgumentException if the argument to the constructor contains a repeated point.
     */
    private void checkDuplicatedPoints(Point[] p){
    	for (int i = 0; i < p.length - 1; i++) {
    		for (int j = i + 1; j < p.length; j++) {
    			if (p[i].compareTo(p[j]) == 0) {
    				throw new java.lang.IllegalArgumentException("the argument to the constructor contains a repeated point");
    			}
    		}
    	}

    }

    /**
     * @return the number of segments containing 4 points;
     */
    public int numberOfSegments() {
   		return allSeg.length;
    }

    /**
     * @return the LineSegment Array in which all segments containing 4 points;
     */
    public LineSegment[] segments() {
   		return Arrays.copyOf(allSeg, allSeg.length);
    }
}