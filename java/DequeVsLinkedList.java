
import java.util.ArrayDeque;
import java.util.LinkedList;
import java.util.Queue;

public class DequeVsLinkedList {
	public static void main(String[] args){
		int time = 1000000;

		long starttime_queue = System.currentTimeMillis();
		Queue<Integer> queue_deque = new ArrayDeque<Integer>(time);
		for (int i = 0; i < time; i++) {
			queue_deque.offer(i);
		}
		for (int i = 0; i < time; i++) {
			queue_deque.poll();
		}
		System.out.println("ArrayDeque cost time: " + (System.currentTimeMillis() - starttime_queue));

		long starttime_linkedlist = System.currentTimeMillis();
		Queue<Integer> queue_linkedlist = new LinkedList<Integer>();
		for (int i = 0; i < time; i++) {
			queue_linkedlist.offer(i);
		}
		for (int i = 0; i < time; i++) {
			queue_linkedlist.poll();
		}
		System.out.println("LinkedList cost time: " + (System.currentTimeMillis() - starttime_linkedlist));
	}

}

