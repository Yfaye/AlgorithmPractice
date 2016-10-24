/******************************************************************************
 *  Compilation:  javac FastCollinearPoints.java
 *  Execution:    java FastCollinearPoints
 *  Dependencies: Point.java LineSegment.java
 *  
 *  This class examines 4 points at a time and checks whether 
 *  they all lie on the same line segment, returning all such line segments.
 *
 ******************************************************************************/
import java.util.Arrays;
import java.util.List;
import java.util.Collections;
import java.util.HashMap;
import java.util.ArrayList;

public class FastCollinearPoints {
	private List<LineSegment> allSeg = new ArrayList<>(); // All segments containing 4 points
	private HashMap<Double, List<Point>> foundSeg = new HashMap<>();

    /**
     * Constructor: finds all line segments containing 4 points
     *
     * @param  array of Points that need to be checked
     * 
     */
    public FastCollinearPoints(Point[] points) {
    	if (points == null) {
    		throw new java.lang.NullPointerException("The argument to the constructor is null");
    	}
    	checkDuplicatedPoints(points);
        Point[] copiedPoints = new Point[points.length];
    	// copy the points array
    	for (int i = 0; i < points.length; i++) {
    		if (points[i] == null) {
    			throw new java.lang.NullPointerException("The point is null");
    		}
    		copiedPoints[i] = points[i];
    	}

    	for (int i = 0; i < points.length; i++) {
            Point curPoint = points[i];
            Arrays.sort(copiedPoints, curPoint.slopeOrder());

            List<Point> linedPoints = new ArrayList<>();
            double curSlope = 0;
            double prevSlope = Double.NEGATIVE_INFINITY;

            for (int j = 1; j < copiedPoints.length; j++) {
                curSlope = curPoint.slopeTo(copiedPoints[j]);
                if (curSlope == prevSlope){
                    linedPoints.add(copiedPoints[i]);
                } else {
                    if (linedPoints.size() >= 3) {
                        linedPoints.add(curPoint);
                        addNewSeg(linedPoints, prevSlope);
                    }
                    linedPoints.clear();
                    linedPoints.add(curPoint);
                }
                prevSlope = curSlope;
            }
            
            if (linedPoints.size() >= 3) {
                linedPoints.add(curPoint);
                addNewSeg(linedPoints, curSlope);
            }
    	}

    }

    private void addNewSeg(List<Point> linedPoints, double slope){
        List<Point> sameLinePoints = foundSeg.get(slope);
        Collections.sort(linedPoints);

        Point start = linedPoints.get(0);
        Point end = linedPoints.get(linedPoints.size() - 1);

        if (sameLinePoints == null) {
            sameLinePoints = new ArrayList<>();
            sameLinePoints.add(end);
            foundSeg.put(slope, sameLinePoints);
            allSeg.add(new LineSegment(start, end));
        } else {
            for (Point cur : sameLinePoints) {
                if (cur.compareTo(end) == 0) {
                    return;
                }
            }
            sameLinePoints.add(end);
            allSeg.add(new LineSegment(start, end));
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
   		return allSeg.size();
    }

    /**
     * @return the LineSegment Array in which all segments containing 4 points;
     */
    public LineSegment[] segments() {
   		return allSeg.toArray(new LineSegment[allSeg.size()]);
    }
}