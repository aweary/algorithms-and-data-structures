// @flow
export default class Queue<T> {
  _inbox: Array<T>;
  _outbox: Array<T>;

  constructor() {
    this._inbox = [];
    this._outbox = [];
  }

  enqueue(item: T) {
    this._inbox.push(item);
  }

  dequeue(): T | null {
    if (this._outbox.length === 0) {
      // Store a reference to the empty outbox
      // so we can reuse it as the new inbox.
      const outbox = this._outbox;
      // The new outbox is the old inbox, reversed
      this._outbox = this._inbox;
      this._outbox.reverse();
      this._inbox = outbox;
    }
    return this._outbox.pop() || null;
  }

  size(): number {
    return this._inbox.length + this._outbox.length;
  }

  clear(): void {
    this._inbox.length = 0;
    this._outbox.length = 0;
  }

  contains(item: T): boolean {
    return this._inbox.includes(item) || this._outbox.includes(item);
  }
}
