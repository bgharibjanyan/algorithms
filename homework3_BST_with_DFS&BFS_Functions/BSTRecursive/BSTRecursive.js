import BSTNode from '../BSTNode/BSTNode.js';
import Queue from '../../homework1/queue/Queue.js';

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
      return;
    }

    if (newValue > node.value) {
      if (node.right === null) {
        node.right = new BSTNode(newValue);
      } else {
        this.add(newValue, node.right);
      }
    } else if (newValue < node.value) {
      if (node.left === null) {
        node.left = new BSTNode(newValue);
      } else {
        this.add(newValue, node.left);
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

  dfs(value, node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    return this.dfs(value, node.left) || this.dfs(value, node.right);
  }

  bfs(value) {
    if (this.isEmpty()) {
      return false;
    }
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue();
      if (currentNode.value === value) {
        return true;
      }
      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right);
      }
    }
    return false;
  }
}