class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    //think of it as pushing at the tail wala end
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(5);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);
