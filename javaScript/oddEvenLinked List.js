/*328. Odd Even Linked List  QuestionEditorial Solution  My Submissions
Total Accepted: 37058
Total Submissions: 93738
Difficulty: Medium
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
	//corner case
	if (head === null || head.next === null || head.next.next === null) {
		return head;
	}

	//set dummy node for even nodes
	var evenNodes = new ListNode(-1);
	var evenRunner = evenNodes;
	var runner = head;

	while (runner !== null && runner.next !== null) {
		evenRunner.next = runner.next;
		evenRunner.next.next = null;
		runner.next = runner.next.next;
		evenRunner = evenRunner.next;
		var pre = runner; //记录runner的前面节点
		runner = runner.next;
	}
	evenRunner.next = null; // 循环结束时，要把evenNodes的结尾指向null，不然连接odd之后，有可能形成有环链表。

	if (runner === null) {
		pre.next = evenNodes.next;  // debug之前是runner = evenNodes.next.这里把runner等于evenNodes的开头，并不会对head开头的链表造成什么影响，要修改这个链表必须修改其中元素的next指针
	} else {
		runner.next = evenNodes.next;
	}

	return head;
    
};

// 本题对我的挑战之一在于，怎么把odd和even连起来呢, 因为runner有可能为null也有可能刚好是原列表的最后一个。后来想到在循环里记录pre，每次更新就好了。这样即使runner为null的时候，也有pre的信息，可以连接evenNodes
// 另一个问题是：debug的时候发现，如果链表个数为基数，似乎会出现无限循环的状态。
//后来分析代码发现，因为最后循环结束的时候，如果是奇数个node，最后一个偶数node的next会指向最后一个node，这样连起来之后，链表就成了一个环了。所以加了line47的debug

// 跟palindrome list结合，总结出来一个规律
// 用while(runner !== null && runner.next !== null) 遍历链表的时候，如果链表的节点数为单数，runner会停留在最后一个节点，如果链表的节点数为双数，runner会停留在null