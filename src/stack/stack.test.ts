import { getTimeFnRun } from "../utils/performance";
import { Stack } from "./stack";

describe("test functionality", () => {
  it("should create empty stack", () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.value).not.toBeNull();
  });

  it("should stack data to stack", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    expect(stack.value).toEqual([1, 2]);
  });

  it("should peek data from stack", () => {
    const stack = new Stack<number>();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it("should check if stack is empty", () => {
    const stack = new Stack<number>();

    expect(stack.isEmpty).toBe(true);

    stack.push(1);

    expect(stack.isEmpty).toBe(false);
  });

  it("should pop data from stack", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty).toBe(true);
  });

  it("should be possible to push/pop objects", () => {
    const stack = new Stack<{ value: string; key: string }>();

    stack.push({ value: "test1", key: "key1" });
    stack.push({ value: "test2", key: "key2" });

    expect(stack.value).toEqual([
      { value: "test1", key: "key1" },
      { value: "test2", key: "key2" },
    ]);
    expect(stack.pop()).toEqual({ value: "test2", key: "key2" });
    expect(stack.pop()).toEqual({ value: "test1", key: "key1" });
  });
});
