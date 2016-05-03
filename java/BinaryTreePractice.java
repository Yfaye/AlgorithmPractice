import java.util.ArrayDeque;

public class BinaryTreePractice {
	static class TreeNode {
		int value;
		TreeNode left, right;

		//TreeNode Constructor
		public TreeNode (int value) {
			this.value = value;
			this.left = this.right = null;
		}
	}

	TreeNode root;

	//BinaryTree Constructor
	public BinaryTreePractice (int[] array) {
		root = makeBinaryTreeByArray(array, 1);
	}

	//Build Binary Tree from Given Array: Recursion
	public TreeNode makeBinaryTreeByArray(int[] array, int index) {
		if (index < array.length) {
			int value = array[index];
			if (value != 0) { // assuming: if TreeNode Value == 0, this TreeNode means null
				TreeNode t = new TreeNode(value);
				array[index] = 0; //set used value to 0;
				t.left = makeBinaryTreeByArray(array,index*2); //assuming: array[0] = 0;
				t.right = makeBinaryTreeByArray(array,index*2+1);
				return t;
			}
		}
		return null;
	}

	//Deepth First Traverse Binary Tree -> Pre-order Traverse -> Non-Recursion -> Stack Used
	public void preorderTraverse() {
		if (root == null) {
			System.out.println("This is an empty tree");
			return;
		}

		ArrayDeque<TreeNode> stack = new ArrayDeque<TreeNode>();
		stack.push(root);
		while(stack.isEmpty() == false) {
			TreeNode node = stack.pop();
			System.out.print(node.value + " ");
			if (node.right != null) {
				stack.push(node.right);
			}
			if (node.left != null) {
				stack.push(node.left);
			}
		}
		System.out.println("\n");
	}

	//Bredth First Traverse Binary Tree -> Pre-order Traverse -> Non-Recursion -> Stack Used
	public void levelorderTraverse(){
		if (root == null) {
			System.out.println("This is an empty tree");
			return;
		}

		ArrayDeque<TreeNode> queue = new ArrayDeque<TreeNode>();
		queue.add(root);
		while (queue.isEmpty()==false) {
			TreeNode node = queue.remove();
			System.out.print(node.value + " ");
			if (node.left != null) {
				queue.add(node.left);
			}
			if (node.right != null) {
				queue.add(node.right);
			}
		}
		System.out.println("\n");
	}
/**   
     *                  13  
     *                 /  \  
     *               65    5  
     *              /  \    \  
     *             97  25   37  
     *            /    /\   /  
     *           22   4 28 32  
     */  
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
		//int[] arr={0,13,65,5,97,25,0,37,22,0,4,28,0,0,32,0}; 
		int[] arr={0,180,65,5,97,25,0,37,22,0,0,28,0,0,0,32}; 
        BinaryTreePractice tree=new BinaryTreePractice(arr);   
        tree.preorderTraverse();   
        tree.levelorderTraverse();
	}
}