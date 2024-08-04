export default class Queue {
    constructor() {
      this.content = [];
      this.front = 0;
      this.rear = 0;
    }
  
    enqueue(value) {
      this.content[this.rear] = value;
      this.rear++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const value = this.content[this.front];
      this.front++;
      return value;
    }
  
    peek() {
      return this.content[this.front];
    }
  
    isEmpty() {
      return this.front === this.rear;
    }
  
    size() {
      return this.rear - this.front;
    }
  
    clear() {
      this.content = [];
      this.front = 0;
      this.rear = 0;
    }
  }