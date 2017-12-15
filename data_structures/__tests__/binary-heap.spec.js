// @flow
import BinaryHeap from "../heap/binary-heap";

function random(seed) {
  return Math.ceil(Math.random() * seed);
}

function ascendingNumericSort(arr) {
  return arr.sort((a, b) => a - b);
}

function descendingNumericSort(arr) {
  return arr.sort((a, b) => b - a);
}

function heapFuzzTester(heap, sorter) {
  let count = random(100);
  while (count--) {
    const inserts = [];
    const deletes = [];
    const values = [];
    let count = random(100);
    while (count--) {
      const value = random(100);
      values.push(value);
      heap.insert(value);
    }
    sorter(values);
    while (values.length) {
      const value = values.pop();
      expect(heap.delete()).toBe(value);
    }
    expect(heap.delete()).toBe(null);
  }
}

describe("BinaryHeap", () => {
  it("works as a max heap", () => {
    const heap : BinaryHeap<number> = new BinaryHeap((a, b) => a > b);
    heapFuzzTester(heap, ascendingNumericSort);
  });

  it("uses a custom comparator", () => {
    const heap = new BinaryHeap((a, b) => a < b);
    heapFuzzTester(heap, descendingNumericSort);
  });

  it("works with complex data", () => {
    // @TODO make this work with the fuzz tester.
    const users = [
      { name: "bobby", age: 27 },
      { name: "aweary", age: 25 },
      { name: "terianne325", age: 26 }
    ];
    const heap = new BinaryHeap((a, b) => a.age < b.age);
    users.forEach(user => heap.insert(user));
    expect(heap.delete()).toEqual({ name: "aweary", age: 25 });
    expect(heap.delete()).toEqual({ name: "terianne325", age: 26 });
    expect(heap.delete()).toEqual({ name: "bobby", age: 27 });
    expect(heap.delete()).toEqual(null);
  });
});
