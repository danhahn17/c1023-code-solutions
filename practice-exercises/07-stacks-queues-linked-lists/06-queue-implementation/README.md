# Queue Implementation

In the last lesson, we looked at how a queue data structure works. It is `First-in, First-out` or `FIFO`. The first element added to the queue will be the first element removed from the queue. We can use an array as a queue, but we can also create our own queue class and that's what we will do here.

## Queue Class & Constructor

Let's start by creating a class named `Queue`. We'll add a property called `queue` and set it to an empty array. We'll also add a property called `head` and set it to 0. We'll add a property called `tail` and set it to 0. Finally, we'll add a property called `maxSize` and set it to 100 by default.

```js
export class Queue<T> {
  maxSize = 100;
  private queue: T[] = [];
  private head = 0;
  private tail = 0;
}
```

## `getLength` Method

Create the `getLength` method and return the difference of the tail and head indexes.

```js
  getLength(): number {
    return this.tail - this.head;
  }
```

## `isEmpty` Method

Create the `isEmpty` method and return the boolean of the length of the queue being equal to 0.

```js
  isEmpty(): boolean {
    return this.getLength() === 0;
  }
```

## `isFull` Method

Create the `isFull` method and return the boolean of the length of the queue being equal to the maxSize.

```js
  isFull(): boolean {
    return this.getLength() === this.maxSize;
  }
```

## `enqueue` Method

Create the `enqueue` method. It will take in a value (element). First, check if the queue is full. If it is, return false. Set the tail index of the queue to the value. Increment the tail index by 1. Return true.

```JS
  enqueue(item: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = item;
    this.tail++;
    return true;
  }
```

## `dequeue` Method

Create the `dequeue` method. Get the item in the head index of the queue and store it in a variable. Increment the head by 1. Return the variable.

```js
  dequeue(): T {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }
```

## `peek` Method

Create the `peek` method and return the item in the head index of the queue.

```js
  peek(): T | undefined {
    return this.queue[this.head];
  }
```

Now you can run the test and/or test it yourself with the following code:

```js
const queue = new Queue();
console.log(queue.isEmpty()); // true
console.log(queue.isFull()); // false
console.log(queue.enqueue(1)); // true
console.log(queue.enqueue(2)); // true
console.log(queue.enqueue(3)); // true
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.getLength()); // 2
```
