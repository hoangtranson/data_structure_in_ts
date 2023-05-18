import { error } from "console";

export class HashTable<T> {
  private buckets: Array<Array<{ key: string; value: T }>>;
  private keys: { [key: string]: unknown };

  constructor(bucketLength: number = 32) {
    this.buckets = new Array<Array<{ key: string; value: T }>>(bucketLength);
    this.keys = {};
  }

  public get value(): Array<Array<{ key: string; value: T }>> {
    return this.buckets;
  }

  public getKeys(): string[] {
    return Object.keys(this.keys);
  }

  public hash(key: string): number {
    return (
      key
        .split("")
        .map((k) => k.charCodeAt(0))
        .reduce((sum, v) => sum + v, 0) % this.buckets.length
    );
  }

  public has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  public set(key: string, value: T) {
    const hash = this.hash(key);

    if (this.has(key)) {
      this.buckets[hash] = this.buckets[hash].map((item) => {
        if (item.key === key) {
          return {
            key,
            value,
          };
        }

        return item;
      });
    } else {
      if (!this.buckets[hash]) {
        this.buckets[hash] = [];
      }

      this.buckets[hash].push({ key, value });
    }

    this.keys[key] = hash;
  }

  public get(key: string): T | undefined {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];
    return bucket?.find((v) => v.key === key)?.value;
  }

  public delete(key: string): void {
    if (!this.has(key)) {
      throw new Error("key not correct");
    }

    const hash = this.hash(key);
    const bucket = this.buckets[hash];

    if (!bucket) {
      throw new Error("bucket no value");
    }

    this.buckets[hash] = [
      ...this.buckets[hash].filter((item) => item.key !== key),
    ];
    delete this.keys[key];
  }
}
