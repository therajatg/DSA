class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    let newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return poppedItem;
  }
}

const myStack = new Stack(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
