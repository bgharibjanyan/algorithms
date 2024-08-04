import BSTNode from '../BSTNode/BSTNode.js';



export default class BSTRecursive {
  constructor(root = null) {
    this.root = root;
  }

  isEmpty() {
    return this.root === null;
  }

  getHeight(node = this.root) {
    if (node === null) {
      return 0;
    } else {
      const leftHeight = this.getHeight(node.left);
      const rightHeight = this.getHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  getNumberOfNodes(node = this.root) {
    if (node === null) {
      return 0;
    } else {
      return 1 + this.getNumberOfNodes(node.left) + this.getNumberOfNodes(node.right);
    }
  }

  getRootData() {
    return this.isEmpty() ? null : this.root.value;
  }

  setRootData(value) {
    if (this.isEmpty()) {
      this.root = new BSTNode(value);
    } else {
      this.root.value = value;
    }
  }

  add(newValue, node = this.root) {
    if (this.isEmpty()) {
      this.root = new BSTNode(newValue);
    } else {
      if (newValue > node.value) {
        if (node.right) {
          this.add(newValue, node.right);
        } else {
          node.right = new BSTNode(newValue);
        }
      } else if (newValue < node.value) {
        if (node.left) {
          this.add(newValue, node.left);
        } else {
          node.left = new BSTNode(newValue);
        }
      } else {
        return;
      }
    }
  }

  clear(node = this.root) {
    if (node !== null) {
      this.clear(node.left);
      this.clear(node.right);
      node.left = null;
      node.right = null;
      node.value = null;
    }
    this.root = null;
  }

  contains(value, node = this.root) {
    if (node === null) {
      return false;
    } else if (value > node.value) {
      return this.contains(value, node.right);
    } else if (value < node.value) {
      return this.contains(value, node.left);
    } else {
      return true;
    }
  }

  inorderTraverse(node = this.root, arr = []) {
    if (node !== null) {
      this.inorderTraverse(node.left, arr);
      arr.push(node.value);
      this.inorderTraverse(node.right, arr);
    }
    return arr;
  }

  preorderTraverse(node = this.root, arr = []) {
    if (node !== null) {
      arr.push(node.value);
      this.preorderTraverse(node.left, arr);
      this.preorderTraverse(node.right, arr);
    }
    return arr;
  }
}
