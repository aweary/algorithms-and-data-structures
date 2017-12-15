import Queue from "../queue";

describe("Queue", () => {
  it("is a FIFO queue", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(4);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(5);
    expect(queue.dequeue()).toEqual(4);
    queue.enqueue(2);
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(null);
  });
});
