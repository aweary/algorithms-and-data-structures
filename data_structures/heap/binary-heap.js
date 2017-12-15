// @flow

type Comparator<T> = (T, T) => boolean;

export default class BinaryHeap<T> {
  comparator: Comparator<T>;
  heap: Array<T>;
  constructor(comparator: Comparator<T>) {
    this.comparator = comparator;
    // $FlowFixMe
    this.heap = [null];
  }

  insert(n: T) {
    this.heap.push(n);
    this.bubbleUp(this.heap.length - 1);
  }

  delete() {
    if (this.heap.length > 1) {
      const result = this.heap[1];
      const last = this.heap.pop();
      if (this.heap.length > 1) {
        this.heap[1] = last;
        this.bubbleDown(1);
      }
      return result;
    }
    return null;
  }

  bubbleDown(index: number): void {
    const { comparator, heap } = this;
    const length = heap.length;
    const left = index * 2;
    const right = left + 1;
    let swap = null;
    if (right < length && comparator(heap[right], heap[index])) {
      swap = right;
    }
    if (
      left < length &&
      comparator(heap[left], swap ? heap[swap] : heap[index])
    ) {
      swap = left;
    }
    if (swap !== null) {
      const element = heap[index];
      heap[index] = heap[swap];
      heap[swap] = element;
      this.bubbleDown(swap);
    }
  }

  bubbleUp(index: number): void {
    const { heap, comparator } = this;
    const element = heap[index];
    // We stop at index 1 as the first element.
    while (index > 1) {
      const parentIndex = Math.floor(index / 2);
      const parent = heap[parentIndex];
      // If the element is smaller, move it up.
      if (comparator(element, parent)) {
        heap[index] = parent;
        heap[parentIndex] = element;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}
