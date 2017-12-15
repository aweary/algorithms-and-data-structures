import HashTable from "../hash_table";

describe("HashTable", () => {
  it("is a key/value store", () => {
    const table = new HashTable(50);
    table.set("foo", 1);
    table.set("bar", 2);
    table.set("baz", 3);
    expect(table.get("foo")).toBe(1);
    expect(table.get("bar")).toBe(2);
    expect(table.get("baz")).toBe(3);
    table.set("baz", 4);
    expect(table.get("baz")).toBe(4);
  });
});
