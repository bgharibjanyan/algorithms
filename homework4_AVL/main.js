import AvlTree from "./AvlTree/AvlTree.js";


const avlTree = new AvlTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log('Root after insertions:', avlTree.root);

avlTree.delete(40);

console.log('Root after deletion:', avlTree.root);

