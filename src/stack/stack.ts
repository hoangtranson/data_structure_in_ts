export class Stack<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  public get isEmpty(): boolean {
    return this.list.length === 0;
  }

  public get value(): T[] {
    return this.list;
  }

  public push(data: T): void {
    this.list.push(data);
  }

  public pop(): T | null {
    if (this.isEmpty) {
      return null;
    }

    return this.list.pop() as T;
  }

  public peek(): T | null {
    if (this.isEmpty) {
      return null;
    }

    return this.list[this.list.length - 1];
  }
}
