/**
 * 反转二叉树
 */

 /**
  * 树节点
  */
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
}

function reverseBTree (node) {
    if (!node) return;

    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    reverseBTree(node.right);
    reverseBTree(node.left);
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(9);
root.left.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(6);
root.right.right.left = new TreeNode(10);
root.right.right.right = new TreeNode(11);

reverseBTree(root);
console.log(root);
