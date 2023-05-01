// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) {
//       return undefined;
//     }
//     let temp = this.head;
//     let pre = this.head;
//     while (temp.next) {
//       pre = temp;
//       temp = temp.next;
//     }
//     this.tail = pre;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//     }
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   shift() {
//     if (!this.head) {
//       return undefined;
//     }

//     let temp = this.head;
//     this.head = this.head.next;
//     temp.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return temp;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) {
//       return undefined;
//     }
//     let temp = this.head;
//     for (let i = 0; i < index; i++) {
//       temp = temp.next;
//     }
//     return temp;
//   }

//   set(index, value) {
//     let temp = this.get(index);
//     if (temp) {
//       temp.value = value;
//       return true;
//     }
//     return false;
//   }

// insert(index, value) {
//   if (index < 0 || index > this.length) return undefined;
//   if (index === 0) return this.unshift(value);
//   if (index === this.length) return this.push(value);
//   const newNode = new Node(value);
//   let prevNode = this.get(index - 1);
//   newNode.next = prevNode.next;
//   prevNode.next = newNode;
//   this.length++;
//   return this;
// }

//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     let before = this.get(index - 1);
//     const temp = before.next;
//     before.next = temp.next;
//     temp.next = null;
//     this.length--;
//     return temp;
//   }

//   reverse() {
//     let temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;

//     let before = null;
//     let after = temp.next;

//     for (let i = 0; i < this.length; i++) {
//       after = temp.next;
//       temp.next = before;
//       before = temp;
//       temp = after;
//     }
//     return this;
//   }

//   getLength() {
//     console.log("Length: " + this.length);
//   }
// }

// const myLinkedList = new LinkedList(7);
// myLinkedList.push(11);
// myLinkedList.push(12);
// myLinkedList.push(13);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
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
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(value);
    let before = this.get(index - 1);
    newNode.next = before.next;
    before.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index < 0 || index >= this.length) return false;
    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let before = null;
    let after;

    for (let i = 0; i < this.length; i++) {
      after = temp.next;
      temp.next = before;

      before = temp;
      temp = after;
    }
    return this;
  }
}
