/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    //if no val at root, return 0;
    if(!this.root) return 0;

    function depthCounter(node){
    //check if each side has children, count children
    //if root has no left and right, end count
    if (node.left === null && node.right === null) return 1;
    //if either side is endpoint, switch to other side and +1
    if(node.left === null) return depthCounter(node.right) + 1;
    if(node.right === null) return depthCounter(node.left) + 1;
    //return the min value of each branch of tree
    return(
      Math.min(depthCounter(node.left), depthCounter(node.right)) + 1
    );
}
return depthCounter(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
//if no val at root, return 0;
if(!this.root) return 0;

function depthCounter(node){
//check if each side has children, count children
//if root has no left and right, end count
if (node.left === null && node.right === null) return 1;
//if either side is endpoint, switch to other side and +1
if(node.left === null) return depthCounter(node.right) + 1;
if(node.right === null) return depthCounter(node.left) + 1;
//return the min value of each branch of tree
return(
  Math.max(depthCounter(node.left), depthCounter(node.right)) + 1
);
}
return depthCounter(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;
    function sumHelper(node){
      if(node === null) return 0;
      const leftSum = sumHelper(node.left)
      const rightSum = sumHelper(node.right);
      //set result to whichever path is current highest sum
      result = Math.max(result, node.val + leftSum + rightSum);
      //continue on the path of whichever node returns largest sum
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }
    sumHelper(this.root)
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;
    //create an array where testing values will be allocated
    let queue = [this.root];
    //at start, closest is set to null, so if no such value, returns null
    let closest = null;
    //while values exist in queue
    while(queue.length){
      //grab node from queue
      let currentNode = queue.shift()
      //grab val from node
      let currentVal = currentNode.val;
      //if currentval is higher than lowerBound
      //if currentval is less than closest, reassign closest
      let higherVal = currentVal > lowerBound;
      let closestReassign = currentVal < closest || closest === null;
      if(higherVal && closestReassign){
        closest = currentVal;
      }
      //if currentNode has left/right, add to queue
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right)
    }
   return closest;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
