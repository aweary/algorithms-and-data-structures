// @flow

class Node<V> {
  // This Node implementation allows us to associate
  // a key with a node so we can easily locate a Node
  // instance without having to worry about looking
  // at the potentially complex `data`.
  key: string;
  data: V;
  next: null | Node<V>;
  constructor(data: V, key: string) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList<T> {
  head: null | Node<T>;
  tail: null | Node<T>;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data: T, key : string = "") {
    const node = new Node(data, key);
    // If the list is empty, this node
    // is now the head and tail of the list.
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // Otherwise, it's stored as the new tail
      const tail = this.tail;
      // $FlowFixMe the tail will never be null if the head is non-null
      tail.next = node;
      this.tail = node;
    }
  }

  findNode(key: string) : null | Node<T> {
    let node = this.head;
    while (node !== null && node.key !== key) {
      node = node.next;
    }
    if (node === null) {
      return null;
    }
    return node;
  }

  find(key: string) : null | T {
    const node = this.findNode(key);
    if (node === null) {
      return null
    }
    return node.data;
  }

}
