/*143. Reorder List  QuestionEditorial Solution  My Submissions
Total Accepted: 69010
Total Submissions: 295354
Difficulty: Medium
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
	//corner case
	if (head === null || head.next === null || head.next.next === null) {
		return head;
	}

	//divide
	var headHalf = new ListNode(-1);
	headHalf.next = head;
	var tailHalf = new ListNode(-1);

	var slow = head;
	var quick = head;

	while (quick !== null && quick.next !== null) {
		var pre_slow = slow;
		slow = slow.next;
		quick = quick.next.next;
	}

	if (quick.next === null) { // nodes number is even
		tailHalf.next = pre_slow.next;
		pre_slow.next = null;
	}

	if (quick === null) { // nodes number is odd
		tailHalf.next = slow.next;
		slow.next = null;
	}

	//reverse tailHalf
	var reversedTail = null;
	while( tailHalf !== null) {
		var tmp = tailHalf.next;
		tailHalf.next = reversedTail;
		reversedTail = tailHalf;
		tailHalf = tmp;
	}

	//merge
	var dummy = new ListNode(-1);
	var reorderHead = dummy;
	while (reversedTail !== null) {
		reorderHead.next = headHalf;
		reorderHead.next.next = reversedTail;
		headHalf = headHalf.next;
		reversedTail = reversedTail.next;
	}
	reorderHead.next = headHalf;
    
    return dummy.next;
};

//本题思路，用快慢指针把list分成前后两截，然后revserse后面一截，然后再merege: 结果OA显示： Do not return anything, modify head in-place instead.
//思考之后，修改如下：
var reorderList = function(head) {
	//corner case
	if (head === null || head.next === null || head.next.next === null) {
		return;
	}

	//divide: got tailhalf and set the end of headhalf
	var tailHalf = new ListNode(-1);

	var slow = head;
	var quick = head;

	while (quick !== null && quick.next !== null) {
		var pre_slow = slow;
		slow = slow.next;
		quick = quick.next.next;
	}

	if (quick === null) { // nodes number is even
		tailHalf.next = pre_slow.next;
		pre_slow.next = null;//set the end of headhalf
	} else if (quick.next === null) { // nodes number is odd
		tailHalf.next = slow.next;
		slow.next = null;//set the end of headhalf
	}

	//reverse tailHalf
	var reversedTail = null;
	while( tailHalf!== null) {
		var tmp = tailHalf.next;
		tailHalf.next = reversedTail;
		reversedTail = tailHalf;
		tailHalf = tmp;
	}

	//insert reversed tail half
	var runner = head;
	while (runner !== null && reversedTail.next !== null) { // stop before the -1 dummy head
		var temp = reversedTail.next;
		reversedTail.next = runner.next;
		runner.next = reversedTail;
		reversedTail = temp;
		if (runner.next !== null) {
			runner = runner.next.next			
		} else {
			runner = runner.next;
		}
	}
    
    return;
};