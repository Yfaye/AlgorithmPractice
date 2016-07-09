/*21. Merge Two Sorted Lists  QuestionEditorial Solution  My Submissions
Total Accepted: 138034
Total Submissions: 381675
Difficulty: Easy
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 var TestList = {
    createNew: function(val) {
        var node = {};
        node.val = val;
        node.next = null;
        return node;
    }
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
        //corner case
    if (l1 === null ) {
    	return l2;
    }
    if (l2 === null) {
    	return l1;
    }

    //set dummy node
    var dummy_l1 = new ListNode(-1);
    var dummy_l2 = new ListNode(-1);
    var dummy_new = new ListNode(-1);
    dummy_l1.next = l1;
    dummy_l2.next = l2;

    var cur_l1 = dummy_l1.next;
    var cur_l2 = dummy_l2.next;
    var cur_new = dummy_new;
    
    while(cur_l1 !== null && cur_l2 !== null) {
    	if (cur_l1.val <= cur_l2.val) {
    		cur_new.next = cur_l1;
    		cur_l1 = cur_l1.next; 
    		cur_new = cur_new.next;
    	} else {
    		cur_new.next = cur_l2;
    	    cur_l2 = cur_l2.next;
        	cur_new = cur_new.next;
    	}
    }
    if (cur_l1 === null && cur_l2 !== null) {
    	cur_new.next = cur_l2;
    }
    if (cur_l1 !== null && cur_l2 === null) {
    	cur_new.next = cur_l1;
    }

    return dummy_new.next;
};

// 这一题是可以优化的，其实只用建一个dummy， 然后用两个指针分别指向两个list的判断处即可。


