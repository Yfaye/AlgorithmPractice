/******************************************************************************
 *  Compilation:  javac RandomizedQueue.java
 *  Execution:    java RandomizedQueue
 *  Dependencies: StdIn.java StdOut.java
 *
 *  This program creates a generic data type RandomizedQueue
 *  A randomized queue is similar to a stack or queue
 *  except that the item removed is chosen uniformly at random from items in the data structure.
 ******************************************************************************/
import java.util.Iterator;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdOut;

/**
 *  The {@code Dequeue} class creates a generic data type Deque.
 *  @author Fei Yan
 */
public class RandomizedQueue<Item> implements Iterable<Item> {
    private Item[] d; // array of items
    private int tail; // pointer of next position of the last element in the array now
    
    // resize the underlying deque
    private void resize(int capacity) {
        assert capacity >= tail;

        Item[] copy = (Item[]) new Object[capacity];
        for (int i = 0; i < tail; i++) {
            copy[i] = d[i];
        }
        d = copy;
    }
    
    // throw a java.lang.NullPointerException if the client attempts to add a null item
    private void validation(Item item) {
        if (item == null) {
            throw new java.lang.NullPointerException("null item is not allowed to add.");
        }
        return;
    }

    /**
     * Initializes an empty randomized queue.
     */
    public RandomizedQueue() {
        d = (Item[]) new Object[2];
        tail = 0;
    }

    /**
     * Is this randomized queue empty?
     * @return true if this randomized queue is empty; false otherwise
     */                 
    public boolean isEmpty() {
        return tail == 0;
    }

    /**
     * Returns the number of items in the randomized queue.
     * @return the number of items in the randomized queue
     */         
    public int size() {
        return tail;
    }

    /**
     * Adds the item to the end of this randomized queue.
     * @param item the item to add
     */     
    public void enqueue(Item item) {
        validation(item);
        if (tail == d.length) {
            resize(2 * d.length);
        }
        d[tail] = item;
        tail++;
    }

    /**
     * Removes and returns a random item in this queue.
     * @return a random item
     * @throws java.util.NoSuchElementException if this queue is empty
     */
    public Item dequeue() {
        if (isEmpty()) {
            throw new java.util.NoSuchElementException("queue underflow");
        }
        int index = StdRandom.uniform(tail);
        // StdOut.print("random deleting the " + index + "th: " + d[index]);
        Item item = d[index];
        if (index != tail - 1) {
            d[index] = d[tail - 1];
        }
        d[tail - 1] = null;
        tail--;
        // StdOut.println("After one dequeue now the size is: " + tail + " ");
        // shrink size of array if necessary
        if (tail > 0 && tail == d.length/4) {
            resize(d.length / 2);
        }
        return item;
    }

    /**
     * Returns (but do not remove) a random item in this queue.
     * @return a random item
     * @throws java.util.NoSuchElementException if this queue is empty
     */                     
   public Item sample() {
        if (isEmpty()) {
            throw new java.util.NoSuchElementException("queue underflow");
        }
        int index = StdRandom.uniform(tail);
        return d[index];
   }

    /**
     * Returns an independent iterator over items in random order
     * @return an independent iterator over items in random order.
     */     
    public Iterator<Item> iterator() {
        return new RandomizedQueueIterator();
    }

    // an iterator, dosen't implement remove()
    private class RandomizedQueueIterator implements Iterator<Item> {
        private int i;
        private int[] r;

        public RandomizedQueueIterator() {
            i = 0;
            r = new int[tail];
            for (int j = 0; j < tail; j++) {
                r[j] = j;
            }
            StdRandom.shuffle(r);
        }

        public boolean hasNext() {
            return i < tail;
        }

        public void remove() {
            throw new UnsupportedOperationException();
        }

        public Item next() {
            if (!hasNext()) throw new NoSuchElementException();
            int idx = r[i++];
            return d[idx];
        }
    }

    /**
     * Unit tests the {@code RandomizedQueue} data type.
     *
     * @param args the command-line arguments
     */
    public static void main(String[] args) {
        RandomizedQueue<Integer> rq = new RandomizedQueue<Integer>();
        int testEnqueue = 10;
        int testDequeue = 3;
        for (int i = 0; i < testEnqueue; i++) {
            rq.enqueue(i);      
        }
        for (int i = 0; i < testDequeue; i++) {
            rq.dequeue();
            //  StdOut.print(rq.dequeue() + " ");
        }
        StdOut.print("now the size is: " + rq.size() + " ");
        StdOut.println("The left are: ");
        for (Integer x : rq) {
            StdOut.print(x + " ");
        }
    }
}