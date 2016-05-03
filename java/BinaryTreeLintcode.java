import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.lang.Integer;
import java.lang.String;
 
public class BinaryTreeLintcode {



/*Definition for binary tree*/
	public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

//Global Var
TreeNode root;

//Consturctor
    public BinaryTreeLintcode(char[] tree) {
        root = buildBinaryTree(tree, 1);
    }

/*Construct Binary Tree from Given Array*/
    public TreeNode buildBinaryTree(char[] treeArray, int index) { //The treeArray is supposed to be the levelorder array of a tree, 'X' is used for representing null
        if (treeArray == null || treeArray.length == 0) {
            return null;
        }

        if (index < treeArray.length) {
            char value = treeArray[index];
            if (value != 'X') {
                int valueInt = Integer.parseInt(String.valueOf(value));
                System.out.println(valueInt);
                TreeNode node = new TreeNode(valueInt);
                treeArray[index] = 'X';
                node.left = buildBinaryTree(treeArray, index * 2);
                node.right = buildBinaryTree(treeArray, index * 2 + 1);
                return node;
            }
        }
        return null;
    }

/*
Binary Tree Preorder Traversal  
Given a binary tree, return the preorder traversal of its nodes' values. 
    Example 
    Given:
        1
       / \
      2   3
     / \
    4   5
    return [1,2,4,5,3].

Challenge Can you do it without recursion?
Tags Recursion Binary Tree Binary Tree Traversal Non Recursion 
*/

//Version 0: Non-Recursion (Recommend)
    public List<Integer> preorderTraversalOne() {

    	ArrayDeque<TreeNode> stack = new ArrayDeque<TreeNode>();
    	List<Integer> preorder = new ArrayList<Integer>();

    	if (root == null) {
    		return preorder; // This is NOT the termination for recursion. 
    	}

    	stack.add(root);
    	
    	while (!stack.isEmpty()) {
    		TreeNode node = stack.pop();
    		preorder.add(node.val);
    		System.out.print(node.val + " ");
    		if (node.right != null) {
    			stack.push(node.right); 
    		}
    		if (node.left!= null) {
    			stack.push(node.left); // FILO, so need to push left at last
    		}
    	}
    	System.out.println("\n");
    	return preorder;
    }

    public ArrayList<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> inorder = new ArrayList<Integer>();
        ArrayDeque<TreeNode> stack = new ArrayDeque<TreeNode>();
        
        if (root == null) {
            return inorder;
        }
        
        TreeNode cur = New TreeNode();
        
    }



/**   
     *                 180  
     *                 /  \  
     *               65    5  
     *              /  \    \  
     *             97  25   37  
     *            /      \    \ 
     *           22      28    32
     */  

    public static void main (String[] args) {
        char[] arr = {'X','180','65','5','97','25','X','37','22','X','X','28','X','X','X','32'};
        /*char[] arr = {'X','180','65','5','97','25','25','37'};*/
        BinaryTreeLintcode test = new BinaryTreeLintcode(arr);
        TreeNode testRoot = test.root;
        test.preorderTraversalOne();
    }

}

