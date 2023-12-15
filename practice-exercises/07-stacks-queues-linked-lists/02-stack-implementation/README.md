# Stack Implementation

Now that we know the fundamentals of a stack, we can implement one in TypeScript. We will create a `Stack` class that has methods such as `push`, `pop` and `peek`.

## Stack Class & Constructor

Let's start by creating a class named `Stack`. We'll add a property called `maxSize` and set it to 100. This is the maximum number of elements that can be in the stack. We'll also add a property called `stack` and set it to an empty array. This is where we'll store the elements in the stack. Finally, we'll add a property called `top` and set it to `-1`. This is the index of the top element in the stack. We are using -1 because the stack is empty. The first element will be at index 0.

```js
export class Stack<T> {
  readonly maxSize = 100;
  private stack: T[] = [];
  private top = -1;
}
```

## `push` Method

Create the `push` method to add to the stack. It will take in a `value` (or element). First, check if the stack is full. If it is, return `false`. Increment the top index by `1`. Set the element at the top index of the stack to the value. Return `true`.

```js
  push(value: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.top++;
    this.stack[this.top] = value;
    return true;
  }
```

## `isFull` Method

Of course we need to add the method to check if the stack is full. It will return `true` if the top index is equal to the maximum size minus 1. Otherwise, it will return `false`.

```js
  isFull(): boolean {
    return this.top === this.maxSize - 1;
  }
```

Let's also add a method to check if the stack is empty. It will return `true` if the top index is equal to `-1`. Otherwise, it will return `false`.

```js
  isEmpty(): boolean {
    return this.top === -1;
  }
```

Now we can test it out a little bit. Create a new instance of the `Stack` class. Push a few elements to the stack. Then, log the stack to the console.

```js
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);
```

You should see something like this:

```text
Stack {
  maxSize: 100,
  stack: [ 1, 2, 3 ],
  top: 2
}
```

## `pop` Method

Now let's create the `pop` method. It will remove the top element from the stack. It is important to know that `pop` and just about any method of any structure can be implemented in many ways. Sometimes the actual data will not be removed from the array (this.stack). It will just go by what is in the top of the stack. I want the actual data to be removed, so I will use the built in `pop` method on the array.

First, check if the stack is empty. If it is, return `undefined`. Then decrement the top by 1 and then return the result from `this.stack.pop()`.

```js
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.top--;

    return this.stack.pop();
  }
```

## `peek` Method

Finally, let's create the `peek` method. It will return the top element of the stack. First, check if the stack is empty. If it is, return `undefined`. Return the element at the top index of the stack.

```js
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.top];
  }
```

Now let's test some more.

```js
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

console.log(stack.pop());
console.peek();
console.log(stack.pop());
console.peek();
console.log(stack.pop());
```
