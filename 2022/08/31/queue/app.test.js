class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  unshift(element) {
    if (this.size() === 0) {
      this.storage['0'] = element;
    } else {
      this.rear += 1;
      this.storage[this.rear] = element;
    }
  }

  shift() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];

      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    }
    return this.rear - this.front + 1;
  }
}

const queue = new Queue();

queue.unshift('queue');
queue.unshift('queue');
queue.unshift('queue');

queue.shift();
queue.shift();

console.log('queue.size(): ', queue.size());
console.log('queue.storage: ', queue.storage);
