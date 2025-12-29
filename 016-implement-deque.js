//deque

// const arr = [2, 5, 6, 7, 32];

// arr.push(23); //0(1)
// arr.pop(); //0(1)
// arr.shift(); //0(n)
// arr.unshift(45); //0(n)

class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  pushBack(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }

  pushFront(item) {
    this.frontIndex--;
    this.items[this.frontIndex] = item;
  }

  popBack() {
    if (this.isEmpty()) return undefined;
    this.backIndex--;
    const item = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return item;
  }

  popFront() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.frontIndex];
  }

  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.backIndex - 1];
  }

  isEmpty() {
    return this.backIndex === this.frontIndex;
  }

  size() {
    return this.backIndex - this.frontIndex;
  }

  clear() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  toArray() {
    const arr = [];
    for (let item in this.items) {
      arr.push(this.items[item]);
    }
    return arr;
  }
}
