import Stack from './../../homework1/stack/stack.js'; 
import BSTNode from '../BSTNode/BSTNode.js';

  
  export default class BSTIterative {
    constructor(root = null) {
      this.root = root;
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    getHeight() {
      if (this.isEmpty()) return 0;
  
      let maxDepth = 0;
      const stack = new Stack();
      stack.push({ node: this.root, depth: 1 });
  
      while (!stack.isEmpty()) {
        const { node, depth } = stack.pop();
        if (node) {
          maxDepth = Math.max(maxDepth, depth);
          stack.push({ node: node.left, depth: depth + 1 });
          stack.push({ node: node.right, depth: depth + 1 });
        }
      }
  
      return maxDepth;
    }
  
    getNumberOfNodes() {
      if (this.isEmpty()) return 0;
  
      let count = 0;
      const stack = new Stack();
      stack.push(this.root);
  
      while (!stack.isEmpty()) {
        const node = stack.pop();
        if (node) {
          count++;
          stack.push(node.left);
          stack.push(node.right);
        }
      }
  
      return count;
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
  
    add(newValue) {
      if (this.isEmpty()) {
        this.root = new BSTNode(newValue);
        return;
      }
  
      let currentNode = this.root;
      while (true) {
        if (newValue > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = new BSTNode(newValue);
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else if (newValue < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = new BSTNode(newValue);
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          break; 
        }
      }
    }
  
    clear() {
      this.root = null;
    }
  
    contains(value) {
      let currentNode = this.root;
  
      while (currentNode) {
        if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          return true;
        }
      }
  
      return false;
    }
  
    inorderTraverse() {
      const result = [];
      const stack = new Stack();
      let currentNode = this.root;
  
      while (!stack.isEmpty() || currentNode !== null) {
        while (currentNode !== null) {
          stack.push(currentNode);
          currentNode = currentNode.left;
        }
        currentNode = stack.pop();
        if (currentNode) {
          result.push(currentNode.value);
          currentNode = currentNode.right;
        }
      }
  
      return result;
    }
  
    preorderTraverse() {
      const result = [];
      const stack = new Stack();
      if (this.root !== null) {
        stack.push(this.root);
      }
  
      while (!stack.isEmpty()) {
        const node = stack.pop();
        if (node) {
          result.push(node.value);
          stack.push(node.right);
          stack.push(node.left);
        }
      }
  
      return result;
    }
  }