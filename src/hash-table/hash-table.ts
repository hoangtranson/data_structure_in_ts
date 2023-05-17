export class HashTable<T> {
  private bucket: Array<Array<T>>;
  private keys: { [key: string]: unknown };

  constructor(bucketLength: number = 32) {
    this.bucket = new Array<Array<T>>(bucketLength);
    this.keys = {};
  }

  public get value(): Array<Array<T>> {
    return this.bucket;
  }
}
