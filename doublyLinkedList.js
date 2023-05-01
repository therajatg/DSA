class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp;
    if (index > this.length / 2) {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    } else {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(value);
    let temp = this.get(index);
    newNode.next = temp;
    newNode.prev = temp.prev;
    temp.prev.next = newNode;
    temp.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    if (index < 0 || index >= this.length) return false;
    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myDoublyLinkedList = new doublyLinkedList(6);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
