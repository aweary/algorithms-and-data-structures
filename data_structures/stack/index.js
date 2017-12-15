// @flow

class Stack<T> {
  _stack: Array<T>;
  constructor() {
    this._stack = [];
  }

  push(item: T) {
    return this._stack.push(item);
  }

  pop() : ?T {
    return this._stack.pop();
  }

  peek() : ?T {
    if (this._stack.length === 0) {
      return null;
    }
    return this._stack[this._stack.length - 1];
  }

  isEmpty() : boolean {
    return this._stack.length === 0;
  }

}