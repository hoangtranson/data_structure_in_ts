import { getTimeFnRun } from "../utils/performance";
import { HashTable } from "./hash-table";

describe("test functionality", () => {
  it("should create hash table of certain size", () => {
    const defaultHashTable = new HashTable<number>();
    expect(defaultHashTable.value.length).toBe(32);

    const biggerHashTable = new HashTable<number>(64);
    expect(biggerHashTable.value.length).toBe(64);
  });

  it("should generate proper hash for specified keys", () => {
    const hashTable = new HashTable<string>();

    expect(hashTable.hash("a")).toBe(1);
    expect(hashTable.hash("b")).toBe(2);
    expect(hashTable.hash("abc")).toBe(6);
  });

  it("should set, read and delete data with collisions", () => {
    const hashTable = new HashTable<string>(3);

    expect(hashTable.hash("a")).toBe(1);
    expect(hashTable.hash("b")).toBe(2);
    expect(hashTable.hash("c")).toBe(0);
    expect(hashTable.hash("d")).toBe(1);

    hashTable.set("a", "sky-old");
    hashTable.set("a", "sky");
    hashTable.set("b", "sea");
    hashTable.set("c", "earth");
    hashTable.set("d", "ocean");

    expect(hashTable.has("x")).toBe(false);
    expect(hashTable.has("b")).toBe(true);
    expect(hashTable.has("c")).toBe(true);

    expect(hashTable.get("a")).toBe("sky");
    expect(hashTable.get("d")).toBe("ocean");
    expect(hashTable.get("x")).not.toBeDefined();

    hashTable.delete("a");

    expect(() => hashTable.delete("not-existing")).toThrow("key not correct");

    expect(hashTable.get("a")).not.toBeDefined();
    expect(hashTable.get("d")).toBe("ocean");

    hashTable.set("d", "ocean-new");
    expect(hashTable.get("d")).toBe("ocean-new");
  });
});
