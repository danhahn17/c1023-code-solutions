# Challenge: HashTable getValues Method

## Instructions

Create a new class named `ValuesHashTable` that extends the existing `HashTable` class and adds a new method called `getValues()`. This method should return an array containing all the values stored in the hash table, irrespective of the keys.

### Examples

```js
const myHashTable = new ValuesHashTable();

myHashTable.set('name', 'Alice');
myHashTable.set('age', 30);
myHashTable.set('city', 'New York');

console.log(myHashTable.getValues()); // Expected output: ['Alice', 30, 'New York']
```

### Hints

- You need to iterate through all buckets in the storage array and all key-value pairs within each bucket.
- Create an array to store the values, iterate through each bucket, and then iterate through each key-value pair. Push each value to the array.
- After iterating through all the key-value pairs, return the array of values.

### Solutions

<details>
  <summary>Click For Solution</summary>

```js
export class ValuesHashTable<T> extends HashTable<T> {
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
```

### Explanation

- Create an empty array to store the values
- Loop through each bucket in the storage
- Check if the bucket is not empty
- Iterate through each key-value pair in the bucket
- Push the value to the values array
- Return the array of values

</details>
