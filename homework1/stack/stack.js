export default class Stack {
  constructor() {
    this.content = [];
  }

  push(value) {
    let size = this.size();
    this.content[size] = value;
    return true;
  }

  pop() {
    let lastIndex = this.size() - 1;
    if (lastIndex < 0) {
      return undefined;  
    } else {
      let value = this.content[lastIndex];
      this.content[lastIndex] = undefined;  
      this.content.length = lastIndex; 
      return value;
    }
  }

  top() {
    let lastIndex = this.size() - 1;
    return this.content[lastIndex];
  }

  isEmpty() {
    return this.size() <= 0;
  }

  size() {
    return this.content.length;
  }

  clear() {
    this.content = [];
    return true;
  }
}
