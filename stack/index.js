class Stack {
  constructor() {
    this.items = []
  }

  /*
    This method adds a new element (or several elements) to the top of the
    stack.
  */
  push(element) {
    this.items.push(element)
  }

  /*
    This method removes the top element from the stack. It also returns the
    removed element.
  */
  pop() {
    this.items.pop()
  }

  /*
    This method returns the top element from the stack. The stack is not
    modified (it does not remove the element; it only returns the element
    for information purposes).
  */
  peek() {
    if(this.items.length === 0)
      return 'The stack is empty'

    return this.items[this.items.length - 1]
  }

  /*
    This method returns true if the stack doest not containt any elements, and
    false if the dize of the stack is bigger than 0.
  */
  isEmpty() {
    return this.items.length === 0
  }

  /*
    This method removes all the elements of the stack.
  */
  clear() {
    this.items = []
  }

  /*
    This method returns the number of elements that the stack contains. It is
    similar to the length property of an array.
  */
  size() {
    return this.items.length
  }

  show() {
    console.log(this.items)
  }
}

const dirtyDishes = new Stack()
dirtyDishes.push('Plate 1')
dirtyDishes.push('Plate 2')
dirtyDishes.pop()
dirtyDishes.pop()
console.log(dirtyDishes.peek())
console.log(dirtyDishes.isEmpty())
dirtyDishes.show()

