/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if no value at root, return zero
    if(!this.root) return 0;
    //starting sumation value at the root val
    let total = this.root.val;
    //for each child of node.children, add to total
    function valSum(node) {
      for(let child of node.children){
        total += child.val;
      // if child has children, call sum val on children
      if(child.children.length > 0) {
        valSum(child)
      }
      }
    }
    //call valSum on starting value
    valSum(this.root)
    // return total
    return total;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    //if no value at root, return zero
    if(!this.root) return 0;
    //start count at root, if root is even +1, else +0
    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countHelper(node) {
      //for child of node, if even, +1 to count
      for(let child of node.children){
        if(child.val % 2 === 0) count++;
        // if child has children, call helper on children
        if(child.children.length > 0){
          countHelper(child)
        }

      }
    }
    //call helper on root
    countHelper(this.root);
    //return count
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // if no value at root, return zero
    if(!this.root) return 0;
    // start count at root
    let count = this.root.val > lowerBound ? 1 : 0;

    function countHelper(node) {
      //for child of node, if greater, +1
      for(let child of node.children) {
        if(child.val > lowerBound) count++;
        //if child has children, continue
        if(child.children.length > 0 ){
          countHelper(child)
        }
      }
    }
    //call helper on route
    countHelper(this.root)
    return count;

  }
}

module.exports = { Tree, TreeNode };
