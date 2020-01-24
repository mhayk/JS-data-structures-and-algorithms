class Stack {
  constructor() {
    this.count = 0;
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {

    if(this.isEmpty()) {
      return undefined
    }

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const myDishes = new Stack
myDishes.push(2)
myDishes.push(3)
myDishes.push(3)
myDishes.push(6)
console.log(myDishes.pop())
console.log(myDishes.items)
console.log(myDishes.count)
console.log(myDishes.peek())
console.log(myDishes.toString())