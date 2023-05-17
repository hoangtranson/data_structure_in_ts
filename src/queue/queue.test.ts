import { getTimeFnRun } from "../utils/performance";
import { Queue } from "./queue";

describe("test functionality", () => {
  test("queue length varies according to enqueued items", () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);

    const item = { foo: "bar" };
    queue.enqueue(item);
    expect(queue.length).toBe(1);

    queue.dequeue();
    expect(queue.length).toBe(0);
  });

  test("first enqueued is first dequeued", () => {
    const queue = new Queue();
    const itemA = { foo: "bar" };
    const itemB = { x: "y" };

    queue.enqueue(itemA);
    queue.enqueue(itemB);

    expect(queue.dequeue()).toBe(itemA);
    expect(queue.dequeue()).toBe(itemB);
  });

  test("queue is empty when all elements were dequeued", () => {
    const queue = new Queue();

    queue.enqueue("a").enqueue("b").enqueue("c");

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty).toBe(true);
  });

  test("items can be enqueued", () => {
    const queue = new Queue();

    queue.enqueue("a").enqueue("b").enqueue("c");

    expect(queue.value).toEqual(["a", "b", "c"]);
  });
});

describe("test functionality", () => {
  let queue: Queue<string>;

  beforeEach(() => {
    queue = new Queue();

    for (let i = 0; i < 50000; i++) {
      queue.enqueue("item number" + i);
    }
  });

  test("50000 element", () => {
    expect(queue.length).toBe(50000);
    const time = getTimeFnRun(() => {
      for (let i = 0; i < 50000; i++) {
        queue.dequeue();
      }
    });
    expect(time).toBeLessThan(2000);
  });
});
