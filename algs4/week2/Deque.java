/******************************************************************************
 *  Compilation:  javac Deque.java
 *  Execution:    java Deque < input.txt
 *  Dependencies: StdIn.java StdOut.java
 *  Data files:   tobe.txt
 *
 *  This program creates a generic data type Deque
 *  it is a generalization of a stack and a queue.
 *  supports adding and removing items from either the front or the back.
 ******************************************************************************/
import java.util.Iterator;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
/**
 *  The {@code Dequeue} class creates a generic data type Deque.
 *  @author Fei Yan
 */

public class Deque<Item> implements Iterable<Item> {
    private Item[] d; // array of items
    private int N; // number of total elements;
    private int head; // pointer to the first element
    private int tail; // pointer to the last element
    /**
     * Initializes an empty deque.
     */
    public Deque() {
        d = (Item[]) new Object[2];
        N = 0;
        head = 0;
        tail = 0;
    }

    /**
     * Is this deque empty?
     * @return true if this deque is empty; false otherwise
     */                 
    public boolean isEmpty() {
        return N == 0;
    }

    /**
     * Returns the number of items in the deque.
     * @return the number of items in the deque
     */         
    public int size() {
        return N;
    }

    // resize the underlying deque
    private void resize(int capacity) {
        assert capacity >= N;

        Item[] copy = (Item[]) new Object[capacity];
        for (int i = 0; i < N; i++) {
            copy[i] = d[(head + i) % d.length];
        }
        d = copy;
        head = 0;
        tail = N - 1;
    }
    
    // throw a java.lang.NullPointerException if the client attempts to add a null item
    private void validation(Item item) {
        if (item == null) {
            throw new java.lang.NullPointerException("null item is not allowed to add.");
        }
        return;
    }

    /**
     * Adds the item to to the front of this deque.
     * @param item the item to add
     */                    
    public void addFirst(Item item) {
        validation(item);
        if (N == d.length) {
            resize(2 * N);
        }

        if (N != 0) {
            if (head == 0) {
                head = d.length - 1;
            } else {
                head--;
            }
        }

        d[head] = item;
        N++;
    }

    /**
     * Adds the item to to the end of this deque.
     * @param item the item to add
     */    
    public void addLast(Item item) {
        validation(item);
        if (N == d.length) {
            resize(2 * N);
        }        
        if (N != 0) {
            if (tail == d.length - 1) {
                tail = 0;
            } else {
                tail++;
            }
        }
        d[tail] = item;
        N++;
    }

    // remove and return the item from the front       
    public Item removeFirst() {
        if (isEmpty()) {
            throw new java.util.NoSuchElementException("deque underflow");
        }
        Item item = d[head];
        d[head] = null;
        if (head == d.length - 1) {
            head = 0;
        } else {
            head++;
        }
        N--;
        if (N == 0) {
            head = 0;
            tail = 0;
        }
        // shrink size of array if necessary
        if (N > 0 && N == d.length/4) {
            resize(d.length / 2);
        }
        return item;
    } 

    // remove and return the item from the end             
    public Item removeLast() {
        if (isEmpty()) {
            throw new java.util.NoSuchElementException("deque underflow");
        }
        Item item = d[tail];
        d[tail] = null;
        if (tail == 0) {
            tail = d.length - 1;
        } else {
            tail--;       
        }
        N--;
        if (N == 0) {
            head = 0;
            tail = 0;
        }
        // shrink size of array if necessary
        if (N > 0 && N == d.length/4) {
            resize(d.length / 2);
        }
        return item;
    }
    /**
     * Returns an iterator to this deque that iterates in order from front to end.
     * @return an iterator to this deque that iterates in order from front to end.
     */        
    public Iterator<Item> iterator() {
        return new DequeIterator();
    }

    // an iterator, dosen't implement remove()
    private class DequeIterator implements Iterator<Item> {
        private int i;

        public DequeIterator() {
            i = head;
        }

        public boolean hasNext() {
            if (N == 0) {
                return false;
            }
            if (tail == d.length - 1) {
                return i != 0;
            } else {
                return i != tail + 1;
            }
        }

        public void remove() {
            throw new UnsupportedOperationException();
        }

        public Item next() {
            if (!hasNext()) throw new NoSuchElementException();
            Item ret = d[i];
            if (i == d.length - 1) {
                i = 0;
            } else {
                i++;
            }
            return ret;
        }
    }

    /**
     * Unit tests the {@code Deque} data type.
     *
     * @param args the command-line arguments
     */
    public static void main(String[] args) {
        Deque<String> deque = new Deque<String>();
        while (!StdIn.isEmpty()) {
            String item = StdIn.readString();
            if (item.charAt(0) == '+') {
                deque.addLast(item);
            } else if (item.charAt(0) == '*') {
                deque.addFirst(item);
            } else if (item.equals("-")) {
                if (!deque.isEmpty()) {
                    StdOut.print(deque.removeLast() + " ");
                }
            } else if (item.equals("#")) {
                if (!deque.isEmpty()) {
                    StdOut.print(deque.removeFirst() + " ");
                }
            }
        }
        StdOut.println("(" + deque.size() + " left in deque)");
    } 
}