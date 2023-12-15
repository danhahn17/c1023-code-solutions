# Custom Hash Table (Hash Map)

We looked at the built-in `Map` class, which is a hash table, but now let's implement our own custom hash table from scratch. This is not going to be a very advanced implementation. Implementations can get much more complex as they handle collisions better and dynamically resize, but this will be a good starting point.

## Class & constructor

Start by creating a `HashTable` class and then add some methods to it.

```js
export class HashTable<T> {
  private storage: [string, T][][] = [];
  private limit: number;

  constructor(limit = 14) {
    this.limit = limit;
  }
}
```

The constructor will take in a `limit` parameter, which will be the size of the hash table. Set a default value of 14, but we can change that when we create a new instance of the `HashTable` class.

Also initialize a `storage` array, which will be the hash table. Set it to an empty array for now.

## `hash` function

Next, create a hash function. This will take in a key and return an index.

The point of hashing is to get a unique index for each key. There are all kinds of hashing algorithms that can be used such as `MD5`, `SHA-1`, `SHA-256`, etc. We are going to use a very simple hashing algorithm that will just add up the character codes of each character in the key and then return the sum modulo the size of the hash table.

This isn't the best hash function because it can cause collisions, which happen when two different keys get the same hash. But we'll not make this too advanced for purposes of the exercise.

```js
  private hash(key: string, max: number): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }
```

It takes in a key, which will be the key that we will pass into the `set` function when we create it. It will also take in a max, which will be the size of the hash table.

Start by initializing a `hash` variable to 0. Then loop through each character in the key and add the character code to the hash. Each character has a character code. You can get the character code of a character by using the `charCodeAt()` method. Add the character code to the hash each time through the loop.

Then return the hash modulo the max, which is the size of the hash table. The reason for this is to make sure that the hash is within the range of the hash table. By using the modulo operator, the result will stay in range because the result will always be less than the max.

## `print` Method

Create a very simple method that just logs the table. You probably wouldn't want to do this in a real application, but it will be useful for us to see what is going on.

```js
  printTable(): void {
    console.log(this.storage);
  }
```

If you instantiate a new `HashTable` and call the `print()` method, you will see an empty array.

```js
const ht = new HashTable();
ht.printTable(); // []
```

## `set` Method

Let's create a method to add a key-value pair to the hash table. This will take in a key and a value. We will use the `hash()` function to get the index where we will store the key-value pair.

```js
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
```

This method will take in a key and a value.

First, we get the index by passing in the key and the limit to the `hash()` function.

Next, we do a little collision handling. Instead of just storing the key-value pair, we first check to see if there is already something stored at that index. If there is nothing there, we just store the key-value pair in an array at that index. If it is not empty, we will loop through the array at that index and check if the key already exists. If it does, we will update the value. If it doesn't, we will push the key-value pair to the array.

Let's test it out.

```js
const ht = new HashTable(8);
ht.set('john', '555-234-3544');
ht.set('james', '555-384-5523');
ht.set('jack', '555-384-9933');
ht.set('jill', '555-390-0034');
ht.printTable();
```

You should see something like this:

```text
[
  [ [ 'james', '555-384-5523' ] ],
  [ [ 'jack', '555-384-9933' ] ],
  <1 empty item>,
  [ [ 'jill', '555-390-0034' ] ],
  <3 empty items>,
  [ [ 'john', '555-234-3544' ] ]
]
```

Remember this image?

![hash table](../../../assets/images/hash-table.png)

It looks very similar to what we have done here. We have an array with 8 items. We have 4 items in the array and 4 empty items. The items in the array are also arrays. Each of those arrays has a key-value pair inside of it. The key is the name and the value is the phone number.

## `get` Method

Now let's create a method to get a value from the hash table. This will take in a key and return the value.

```js
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
```

First, we get the index by passing in the key and the limit to the `hash()` function. Then we check if the index is empty. If it is, we will return `undefined`. If it is not empty, we will loop through the array at that index and check if the key exists. If it does, we will return the value.

Let's test it out.

```js
const ht = new HashTable(8);
ht.set('john', '555-234-3544');
ht.set('james', '555-384-5523');
ht.set('jack', '555-384-9933');
ht.set('jill', '555-390-0034');
console.log(ht.get('jill')); // 555-390-0034
console.log(ht.get('jack')); // 555-384-9933
console.log(ht.get('james')); // 555-384-5523
console.log(ht.get('john')); // 555-234-3544
```

You should get the following:

```text
555 - 390 - 0034;
555 - 384 - 9933;
555 - 384 - 5523;
555 - 234 - 3544;
```

## `remove` Method

Now let's create a method to remove a key-value pair from the hash table. This will take in a key and remove the key-value pair.

```js
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
```

First, we get the index by passing in the key and the limit to the `hash()` function.

Then we check if the bucket exists.

Then we check if the key matches the key at the index and there is only one item in the bucket, delete the bucket, otherwise loop through the bucket and delete the item that matches the key.

You should get something like the following:

```text
[
  [ [ 'james', '555-384-5523' ] ],
  <1 empty item>,
  [ [ 'jill', '555-390-0034' ] ],
  <3 empty items>
]
```

## `getValues` Method

Now let's create a method to get all the values from the hash table. This will return an array of all the values.

```js
 getValues() {
    const values = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          values.push(this.storage[i][j][1]);
        }
      }
    }
    return values;
  }
```

Let's test it out.

```js
console.log(ht.getValues()); // [ '555-234-3544', '555-384-5523', '555-384-9933', '555-390-0034' ]
```

## Conclusion

That's it! You have create your own hash table. You can now add, get, and remove key-value pairs from your hash table. You can also print out the hash table to see what it looks like.

Now you can do a couple of exercises using this class.
