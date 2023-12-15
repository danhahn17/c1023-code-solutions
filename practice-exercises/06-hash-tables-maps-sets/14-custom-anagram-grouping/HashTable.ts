export class HashTable<T> {
  protected storage: [string, T][][] = [];
  protected limit: number;

  constructor(limit = 14) {
    this.limit = limit;
  }

  protected hash(key: string, max: number): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  /** Inserts a key-value pair. */
  set(key: string, value: T): void {
    const index = this.hash(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  /** Gets a value. */
  get(key: string): T | undefined {
    const index = this.hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
    return undefined;
  }

  /** Removes a key-value pair. */
  remove(key: string): void {
    const index = this.hash(key, this.limit);
    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    }
  }

  /** Check if a key exists. */
  has(key: string): boolean {
    const index = this.hash(key, this.limit);

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true;
        }
      }
    }

    return false;
  }

  /** Print all keys/values. */
  printTable(): void {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i} Empty`);
      }
    }
  }

  /** Clear all key/values. */
  clear(): void {
    this.storage = [];
  }

  /** Gets an array of all values. */
  getValues(): T[] {
    const values = [];

    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (const [, value] of this.storage[i]) {
          values.push(value);
        }
      }
    }

    return values;
  }
}
