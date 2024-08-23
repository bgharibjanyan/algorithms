import AvlNode from "../AvlNode.js";

export default class AvlTree {
  constructor() {
    this.root = null;
  }

  getBalanceFactor(node) {
    if (!node) {
      return 0;
    }

    const leftHeight = node.left ? node.left.height : 0;
    const rightHeight = node.right ? node.right.height : 0;
    return leftHeight - rightHeight;
  }

  insert(data) {
    this.root = this.beforeInsert(this.root, data);
  }

  beforeInsert(node, data) {
    if (!node) {
      return new AvlNode(data);
    }

    if (data > node.data) {
      node.right = this.beforeInsert(node.right, data);
    } else if (data < node.data) {
      node.left = this.beforeInsert(node.left, data);
    } else {
      return node; 
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    return this.balance(node);
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  delete(value) {
    this.root = this.onNodeDelete(this.root, value);
  }

  search(value, node = this.root) {
    if (!node) {
      return null;
    }

    if (value === node.data) {
      return node;
    }

    if (value < node.data) {
      return this.search(value, node.left);
    } else {
      return this.search(value, node.right);
    }
  }

  onNodeDelete(node, value) {
    if (!node) {
      return node;
    }

    if (value < node.data) {
      node.left = this.onNodeDelete(node.left, value);
    } else if (value > node.data) {
      node.right = this.onNodeDelete(node.right, value);
    } else {
      if (!node.left || !node.right) {
        const temp = node.left ? node.left : node.right;

        if (!temp) {
          return null;
        } else {
          return temp;
        }
      }

      const temp = this.getMinValueNode(node.right);
      node.data = temp.data;
      node.right = this.onNodeDelete(node.right, temp.data);
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    return this.balance(node);
  }

  getMinValueNode(node) {
    let current = node;

    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }

  balance(node) {
    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = node.left.leftRotate();
        return node.rightRotate();
      }
      return node.rightRotate();
    }

    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = node.right.rightRotate();
        return node.leftRotate();
      }
      return node.leftRotate();
    }

    return node;
  }
}
