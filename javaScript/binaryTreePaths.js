/*257. Binary Tree Paths  QuestionEditorial Solution  My Submissions
Total Accepted: 58935
Total Submissions: 191298
Difficulty: Easy
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    if (root === null) {
    	return [];
    }

    var getPath = function(node, path, result) {
    	if (node === null) {
    		return;
    	}
    	path = path +  '->' + node.val.toString();
    	if (node.left === null && node.right === null) {
    		result.push(path.substring(2));
    		return;
    	}
    	if (node.left !== null) {
    	   arguments.callee(node.left, path, result);
    	}
    	if(node.right !== null) {
    	   arguments.callee(node.right, path, result);
    	}


    }

    var result = [];
    var path ="";
    getPath(root, path, result); 
    
    return result;   
}

/*
var binaryTreePaths = function(root) {
    if (root === null) {
    	return [];
    }

    var getPath = function(node, path, result) {
    	if (node === null) {
    		return;
    	}
    	path.push(node.val);
    	if (node.left === null && node.right === null) {
    		result.push(path.join("->"));
    		return;
    	}
    	if (node.left !== null) {
    		arguments.callee(node.left, path, result); // 这里不是直接传path，而应该传path的副本，path.slice(0);
    	}
    	if(node.right !== null) {
    		arguments.callee(node.right, path, result);// 这里不是直接传path，而应该传path的副本，path.slice(0);
    	}

    }

    var path = [];
    var result = [];
    getPath(root, path, result); 
    
    return result;    
};

*/

// 这道题是EASY级别的，但却花费了我至少4个小时的时间，最后还是js传值和传引用的问题所引起来的bug！
// 后来查看discuss部分的讨论，觉得基本和我的思路一样啊，为什么我的错那么多？还各种总结，发现问题在于走左子树时的路径总是被右子树继承，然后各种思考，怎么pop可以不让左子树的路径被右子树继承
// 无果，后来改成path用string来做，但是其实还是没有抓住关键，这里的关键在于，分开走左子树和右子树的path的时候，他们应该用已有path的副本为基础，而不是直接在已有path的基础上修改，这样才不会互相干扰！

// 还有一点，这题想到要保留每次的path和总的result所以决定用dfs的方式来做，
// 其实divide and conquer也是可以用的，只不过是现在我divide and conquer用得还不够纯熟。下面是参考别人的divide and conquer，改写的代码列在下面，也AC了。

 var binaryTreePaths = function(root) {
    if (root === null) {
    	return [];
    }
    if (root.left === null && root.right === null) {
    	return [root.val.toString()];
    }

    var left = arguments.callee(root.left);
    var right = arguments.callee(root.right);

    var result = left.concat(right);

    /*result.forEach(function(element) {
    	element = root.val.toString() + "->" + element;
    });*/  
    //var n = result.length;
    for (var i = 0; i < result.length; i++) {
    	result[i] = root.val.toString() + "->" + result[i];
    }

    return result;
}

// 用divide and conquer的方法，解决树的问题，发现divide一般比较简单，就是分成左子树和右子树，真正产生答案的地方，是分完了之后，如何conquer的过程，也就是左子树的答案怎么怎么样，右子树的答案怎么怎么样，然后能捏叭成整个的答案
// 还有两点待探索的体会
// 1. Divide and Conquer 方法，一般都会略改变题目直接要求的return 的内容？
// 2. Js 数组的forEach 方法，能不能直接修改数组里的每个元素？