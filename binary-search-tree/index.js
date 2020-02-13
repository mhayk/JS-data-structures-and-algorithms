// lookup O(log N)
// insert O(log N)
// delete O(log N)

// to the left the values decrease
// to the right the values increase
// Balanced vs Unbalanced

// https://visualgo.net/en/bst


import Node from './Node';

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    const node = new Node(value);

    if (this.root.value < value) {}
  }
}

const binaryTree = new BinaryTree(2);

console.log(JSON.stringify(binaryTree));
