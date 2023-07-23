// lookup O(log N)
// insert O(log N)
// delete O(log N)

// to the left the values decrease
// to the right the values increase
// Balanced vs Unbalanced

// https://visualgo.net/en/bst


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          } else {
            currentNode = currentNode.left;
          }
        }

        if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    console.log(list);
  }

  breadthFirstSearchRecursive(queue, list) {
    if (queue.length === 0) {
      console.log(list)
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }

  DFSInOrder() {
    this.traverseInOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }

    list.push(node.value);

    if (node.right) {
      this.traverseInOrder(node.right, list);
    }

    console.log(list);
    return list
  }

  DFSPreOrder() {
    this.traversePreOrder(this.root, []);
  }

  traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) this.traversePreOrder(node.left, list);
    if (node.right) this.traversePreOrder(node.right, list);
    console.log(list)
    return list;
  }
}

const bst = new BinarySearchTree();

console.log(JSON.stringify(bst));

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

console.log(JSON.stringify(bst));
//    9
// 4     20
//1 6  15 170

bst.breadthFirstSearch();
bst.breadthFirstSearchRecursive([bst.root], []);
bst.traverseInOrder(bst.root, []);
bst.traversePreOrder(bst.root, []);