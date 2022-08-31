/* eslint-disable consistent-return */
class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(element) {
    this.size += 1;
    this.storage[this.size] = element;
  }

  pop() {
    if (this.size === 0) {
      return 0;
    }
    const deleted = this.storage[this.size];
    delete this.storage[this.size];
    this.size -= 1;

    return deleted;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();

stack.push('stack');
stack.push('code');
stack.push('push');
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log('stack.size: ', stack.size);

console.log('stack.storage: ', stack.storage);
