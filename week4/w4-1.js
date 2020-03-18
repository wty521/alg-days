/**
 * 求数的轮廓
 * 求二叉树从左侧看的轮廓，如图，返回[1,5,4,8]。求每行最大值，返回[1,9,7,8]
 *
 */

class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }
}
/**
 * 轮廓
 * @param {*} node 树
 * @param {*} d 层数
 * @param {*} outline res
 * 深度优先 先遍历左边再遍历右边
 */
function leftoutLineTree(node, d = 0, outline=[]) {
    if(!node) return;

    if (!outline[d]) {
        outline[d] = node.value;
    }

    leftoutLineTree(node.left, d + 1, outline);
    leftoutLineTree(node.right, d + 1, outline);
    return outline;
}

/**
 * 每行最大值
 * @param {*} node 树
 * @param {*} d 层数
 * @param {*} outline res
 * 深度优先 先遍历左边再遍历右边
 */
function maxOfLine(node, d = 0, outline=[]) {
    if(!node) return;

    outline[d] = Math.max(outline[d] || -1, node.value);

    maxOfLine(node.left, d + 1, outline);
    maxOfLine(node.right, d + 1, outline);
    return outline;
}


const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(3);
root.right.right.left = new TreeNode(8);

const outline = leftoutLineTree(root);
const maxline = maxOfLine(root);
console.log(outline);
console.log(maxline);