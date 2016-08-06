/*
236. Lowest Common Ancestor of a Binary Tree  QuestionEditorial Solution  My Submissions
Total Accepted: 52473
Total Submissions: 181601
Difficulty: Medium
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    /* 
    //corner case
    if (root === null || p === null || q === null) {
    	return null;
    }

    var existInTree = function(node, t) {
    	if (node === null) {
    		return false;
    	}
        if(node.val === t.val) {
            return true;
        }

    	return existInTree(node.left, t) || existInTree(node.right, t);

    };

   
if (   (root.val === p.val && existInTree(root.left, q)) 
    	|| (root.val === p.val && existInTree(root.right, q))
    	|| (root.val === q.val && existInTree(root.left, p))
    	|| (root.val === q.val && existInTree(root.right, p)) 
    	) {
    	return root;
    }  else if ((root.val !== p.val && root.val !== q.val) ) {
    	if(existInTree(root.left, p) && existInTree(root.left, q)) {  //这里发生了难以搞定的逻辑灾难，就是如果p与q的值一样，但p，q其实分别在两棵子树里的时候，在这里就会被return null了。
   			return lowestCommonAncestor(root.left, p, q); 		
    	}
    	if(existInTree(root.right,p) && existInTree(root.right,q)) {  // 逻辑灾难的原因终于查明： 不应该比较val相等，而是直接比较这两个node是否相等
    		return lowestCommonAncestor(root.right, p, q); 
    	}
        console.log('got here');
    	if ((existInTree(root.left, p) && existInTree(root.right, q)) || (existInTree(root.left, q) && existInTree(root.right, p))) {
    		return root;
    	}    	
    } else {
        return null;
    }*/
    // 在root为根的二叉树中找A,B的LCA:
    // 如果找到了就返回这个LCA
    // 如果只碰到A，就返回A //关键思路！
    // 如果只碰到B，就返回B //关键思路！
    // 如果都没有，就返回null

    if (root === null || root === p || root === q) {
        return root;
    }
    var lLCA = arguments.callee(root.left, p, q);
    var rLCA = arguments.callee(root.right, p, q);

    if (lLCA !== null && rLCA !== null ) {
        return root;
    } 
    if (lLCA !== null) {
        return lLCA;
    }
    if (rLCA !== null) {
        return rLCA;
    }

    return null;

};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var roo = new TreeNode(1);
var l = new TreeNode(2);
var r = new TreeNode(3);
var p = new TreeNode(2);
var q = new TreeNode(3);

roo.left = l;
roo.right = r;

var result = lowestCommonAncestor(roo, p, q);
console.log(result);

//本题，花了从上午10点多到下午3点多，这么多这么多的时间去解决，结果发现，是自己连LCA的基本题意都没有理解，不是比较外来的node，而是本身树里面的两个node来比较
// 所以之前用.val来比较，有各种各样各种各样的问题！！！！！
// 不过，即使把val去掉，我的原始解法，依然是TLE的，我的判断是否存在于子树，然后再在子树里面找他们的LCA的做法，实际是浪费。所以我只用调整算法为：在root为根的二叉树中找A,B的LCA:
// 如果找到了就返回这个LCA, 如果只碰到A，就返回A , 如果只碰到B，就返回B, 如果都没有，就返回null
// 再总结一遍： D&C for Tree!!!!!
