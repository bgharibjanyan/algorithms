export default class AvlNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  
    leftRotate() {
      const y = this.right;
      const tmp = y.left;
  
      y.left = this;
      this.right = tmp;
  
      this.height = Math.max(this.left ? this.left.height : 0, this.right ? this.right.height : 0) + 1;
      y.height = Math.max(y.left ? y.left.height : 0, y.right ? y.right.height : 0) + 1;
  
      return y;
    }
  
    rightRotate() {
      const y = this.left;
      const tmp = y.right;
  
      y.right = this;
      this.left = tmp;
  
      this.height = Math.max(this.left ? this.left.height : 0, this.right ? this.right.height : 0) + 1;
      y.height = Math.max(y.left ? y.left.height : 0, y.right ? y.right.height : 0) + 1;
  
      return y;
    }
  }
  