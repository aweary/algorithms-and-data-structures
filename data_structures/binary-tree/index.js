// @flow

export class Node<T> {
  left: null | Node<T>;
  right: null | Node<T>;
  data: T;
  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: null | Node<T>;
}