/******************************************************************************
 *  Compilation:  javac Dequeue.java
 *  Execution:    java Dequeue
 *
 *  This program creates a generic data type Deque
 *  it is a generalization of a stack and a queue.
 *  supports adding and removing items from either the front or the back.
 ******************************************************************************/

/**
 *  The {@code Dequeue} class creates a generic data type Deque.
 *  @author Fei Yan
 */

public class Deque<Item> implements Iterable<Item> {
    private Item[] d;
    private int N = 0;
    private int head = 0;
    private int tail = 0;

    // construct an empty deque
    public Deque(){
    	d = (Item[]) new Object[1];
    }

    // resize the deque
    private void resize(int capacity) {
    	Item[] copy = new Item[capacity];
    	for (int i = 0; i < N; i++) {
    		copy[i] = d[i];
    	}
    	d = copy;
    }

    private void validation(Item item) {
    	if (item == null) {
    		throw new java.lang.NullPointerException("null item is not allowed to add.");
    	}
    	return;
    }

    // is the deque empty?                      
    public boolean isEmpty() {
    	return N == 0;
    }

    // return the number of items on the deque              
    public int size() {
    	return N;
    }

    // add the item to the front                       
    public void addFirst(Item item) {
    	validation(item);
    	if (N == d.length) {
    		resize( 2 * d.length);
    	}
    	if (head == 0) {
	      	for (int i = N - 1; i >= 0; i--) {
	    		d[i+1] = d[i];
	    	}
	    	d[head] = item; 		
    	} else {
    		d[--head] = item;
    	}
    	N += 1;
    }

    // add the item to the end       
    public void addLast(Item item) {
    	validation(item);
    	if (N == d.length) {
    		resize( 2 * d.length);
    	}
    	d[N++] = item;
    }

    // remove and return the item from the front       
    public Item removeFirst() {

    } 

    // remove and return the item from the end             
    public Item removeLast() {
    	if (this.isEmpty()) {
    		throw new java.util.NoSuchElementException("There is no more elemement in the deque");
    	}
    	Item item = d[--N];
    	d[N] = null;
    	if (N > 0 && N == d.length/4) {
    		resize(d.length / 2);
    	}
    	return item;
    }

    // return an iterator over items in order from front to end             
    public Iterator<Item> iterator() {

    }

    // unit testing
    public static void main(String[] args) {

    } 
}