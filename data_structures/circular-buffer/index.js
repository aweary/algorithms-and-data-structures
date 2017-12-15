// @flow

class CircularBuffer<T> {
  _size: number;
  _next: number;
  _buff: Array<T>;

  constructor(size: number) {
    this._size = size;
    this._next = 0;
    this._buff = [];
  }

  add(item: T): ?T {
    // Store a reference to the last item
    // so we can return it.
    const last = this._buff[this._next];
    this._buff[this._next] = item;
    this._next = (this._next + 1) % this._size;
    return last;
  }

  get(index: number): ?T {
    // @todo
  }

  set(index: number, item: T): void {
    // @todo
  }

  count(): number {
    // @todo
  }

  isEmpty(): boolean {
    // @todo
  }

  clear(): void {
    // @todo
  }

  values(): Array<T> {
    // @todo
  }

  getNewestValues(count: number): Array<T> {
    // @todo
  }

  getKeys(): Array<number> {
    // @todo
  }
}
