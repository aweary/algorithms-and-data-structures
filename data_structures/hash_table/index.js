// @flow
import LinkedList from "../linked_lists/singly-linked-list";

export function hash(s: string): number {
  // Start the hash with as ~high prime number
  let hash = 6143;
  // Iterate through the string from front to back
  let i = 0;
  while (i < s.length) {
    hash = (hash * 33) ^ s.charCodeAt(i++);
  }
  // Convert the resut to an unsigned integer to ensure
  // its always positive.
  return hash >>> 0;
}

type CollisionListMap<T> = Array<LinkedList<T>>;

export default class HashTable<V> {
  _size: number;
  _table: CollisionListMap<V>;
  constructor(size: number) {
    this._size = size;
    this._table = new Array(size);
  }

  _getIndex(key: string): number {
    const { _size, _table } = this;
    return hash(key) % _size;
  }

  set(key: string, value: V) {
    const index = this._getIndex(key);
    // If there's already a list then we've hit
    // a collision. Need to deal with it.
    const list = this._table[index];
    if (list) {
      const node = list.findNode(key);
      if (node) {
        node.data = value;
      } else {
        list.append(value, key);
      }
    } else {
      this._table[index] = new LinkedList();
      this._table[index].append(value, key);
    }
  }

  get(key: string): ?V {
    const index = this._getIndex(key);
    const list = this._table[index];
    if (!list) {
      return null;
    }
    return list.find(key);
  }
}
