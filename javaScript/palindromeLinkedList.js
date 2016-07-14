/*234. Palindrome Linked List  QuestionEditorial Solution  My Submissions
Total Accepted: 55686
Total Submissions: 190102
Difficulty: Easy
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	//corner case
	if (head === null) {
		return false;  // changed from false to true due to OA results
	}
	if (head.next === null) {
		return true;
	}

	var slow = head;
	var quick = head;
	var stack = [];

	while(quick !== null && quick.next !== null) {
		stack.push(slow.val);
		slow = slow.next;
		quick = quick.next.next;
	}

	if (quick === null) { // list nodes number is even
		/*var secondHalf = stack.pop();
		if (secondHalf !== stack.pop()) {
			return false;
		}*/  // 这一段debug是因为，stack里面推进去的都是slow前面的值，并不包含当前的slow
		while(slow !== null && stack.length !== 0) {
			secondHalf = slow.val;
			if (secondHalf !== stack.pop()) {
				return false;
			}
			slow = slow.next;
		}
		return true;
	} else { // list nodes number is odd
		//stack.pop();
		slow = slow.next; // 这一段debug同上，stack里面推进去的都是slow前面的值，这个slow是个中间位置，单一值，不用参与比较，所以跳过
		while(slow !== null && stack.length !== 0) {
			var secondHalf = slow.val;
			if (secondHalf !== stack.pop()) {
				return false;
			}
			slow = slow.next;
		}
		return true;
	}
    
};
