import { getTimeFnRun } from "../utils/performance";
import { HashTable } from "./hash-table";

describe("test functionality", () => {
  it("should create hash table of certain size", () => {
    const defaultHashTable = new HashTable<number>();
    expect(defaultHashTable.value.length).toBe(32);

    const biggerHashTable = new HashTable<number>(64);
    expect(biggerHashTable.value.length).toBe(64);
  });
});
