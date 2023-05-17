export class Queue<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  public get isEmpty(): boolean {
    return this.list.length == 0;
  }

  public get length(): number {
    return this.list.length;
  }

  public get value(): T[] {
    return this.list;
  }

  public enqueue(item: T): Queue<T> {
    this.list = [...this.list, item];
    return this;
  }

  public dequeue(): T {
    const item = this.list[0];
    this.list = this.list.slice(1);
    return item;
  }
}
