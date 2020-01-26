// 10-->5-->16
// 1-->10-->5-->16
// 1-->10-->99-->5-->16
/*
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
*/
const util = require('util')

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (this.head != null) {
      // let node = new Node(value)
      // this.tail.next = node
      // this.tail = node;
      // this.length++;
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  printList() {
    let node = this.head;
    while (node != null) {
      process.stdout.write(`[${node.value}]-->`);
      node = node.next;
    }
    process.stdout.write('null\n');
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else {
      let currentNode = this.head;
      let i = 0;
      while (currentNode.next != null) {
        const preNode = currentNode;
        const nextNode = currentNode.next;
        i++;
        if (i == index) {
        //   const newNode = {
        //     value,
        //     next: nextNode
        //   };
          const newNode = new Node(value)
          newNode.next = nextNode
          preNode.next = newNode;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }

  remove(index) {
      if ( index >= this.length) {

      } else {
        let currentNode = this.head;
        let i = 0;
        while (currentNode.next != null) {
          const preNode = currentNode;
          const nextNode = currentNode.next;
          i++;
          if (i == index) {
          //   const newNode = {
          //     value,
          //     next: nextNode
          //   };
            // const newNode = new Node(value)
            preNode.next = nextNode.next
            this.length--
            // delete nextNode;
            break;
          }
          currentNode = currentNode.next;
        }
      }
  }

  prepend(value) {
    if (this.head != null) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.remove(2)
myLinkedList.printList()
// console.log(util.inspect(myLinkedList, false, null, true))
// console.log(myLinkedList)

