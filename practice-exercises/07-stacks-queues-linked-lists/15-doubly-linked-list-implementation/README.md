# Doubly Linked List Implementation

In this lesson, we will create a doubly linked list class in TypeScript. If you want to try this on your own, going on the knowledge that you have of a linked list and what was explained about a doubly linked list, go ahead and try to implement this on your own. If you get stuck, you can always come back to this lesson.

## `Node` Class

We will first create a `Node` class that will be used to create nodes for our doubly linked list. The `Node` class will take in a value and set the `value` property to the value that is passed in. It will also set the `next` and `prev` properties to `undefined`.

```js
class Node<T> {
  data: T;
  next: Node<T> | undefined = undefined;
  prev: Node<T> | undefined = undefined;
  constructor(data: T) {
    this.data = data;
  }
}
```

## `DoublyLinkedList` Class

Next, we will create a `DoublyLinkedList` class that will be used to create doubly linked lists. The `DoublyLinkedList` class will set the `head` and `tail` properties to `undefined` and the `length` property to `0`.

```js
export class DoublyLinkedList<T> {
  head: Node<T> | undefined = undefined;
  tail: Node<T> | undefined = undefined;
  length = 0;
}
```

## `append` Method

We will add a method called `append` to the `DoublyLinkedList` class. This method will add a node to the end of the doubly linked list.

```js
  append(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail && (this.tail.next = newNode);
      this.tail = newNode;
    }

    this.length++;
  }
```

We create a new node with the data that is passed in. If the `head` property is `undefined`, then we set the `head` and `tail` properties to the new node. Otherwise, we set the `prev` property of the new node to the current `tail` node. We then set the `next` property of the current `tail` node to the new node. Finally, we set the `tail` property to the new node.

Let's try out what we have so far.

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list);
```

You should see something like this:

```text
DoublyLinkedList {
  head: <ref *1> Node {
    data: 1,
    next: Node { data: 2, next: [Node], prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    data: 3,
    next: null,
    prev: Node { data: 2, next: [Circular *2], prev: [Node] }
  },
  length: 3
}
```

This shows us that we have a doubly linked list with a `head` and `tail` node. The `head` node has a `next` node and the `tail` node has a `prev` node. The `prev` of the first node and the `next` of the last node are both `undefined`.

## `printAll` Method

Let's create a method to print out all of the data in the list. We will add a method called `printAll` to the `DoublyLinkedList` class.

```js
  printAll(): void {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
```

You can test this with the following:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);

list.printAll();
```

You should see something like this:

```text
1
2
3
```

## `prepend` Method

Let's add a method to add a node to the beginning of the list. We will call this method `prepend`. It will take in a value and add a node to the beginning of the list.

```js
  prepend(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }
```

We create a new node with the data that is passed in. If the `head` property is `undefined`, then we set the `head` and `tail` properties to the new node. Otherwise, we set the `next` property of the new node to the current `head` node. We then set the `prev` property of the current `head` node to the new node. Finally, we set the `head` property to the new node.

You can try with:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');

list.printAll();
```

You should see something like this:

```text
Hello
1
2
3
```

## `insertAt` Method

Let's add a method to insert a node at a specific index. We will call this method `insertAt`. It will take in an index and a value and insert a node at that index.

```js
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode?.next;
    }

    newNode.next = currentNode?.next;
    newNode.prev = currentNode;
    currentNode?.next && (currentNode.next.prev = newNode);
    currentNode && (currentNode.next = newNode);

    this.length++;
  }
```

We first check if the index is valid. If it is, we check if the index is `0`. If it is, we call the `prepend` method. We then check if the index is the same as the length of the list. If it is, we call the `append` method. Otherwise, we create a new node with the data that is passed in.

We then loop through the list until we get to the node before the index. We set the `next` property of the new node to the `next` property of the current node. We set the `prev` property of the new node to the current node. We set the `prev` property of the node after the new node to the new node. We set the `next` property of the current node to the new node.

You can try with:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');
list.insertAt(2, 'World');

list.printAll();
```

You should see something like this:

```text
Hello
1
World
2
3
```

## `get` Method

Let's add a method to get a node at a specific index. We will call this method `get`. It will take in an index and return the node at that index.

```js
  get(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next;
    }

    return currentNode;
  }
```

We first check if the index is valid. If it is, we loop through the list until we get to the node at the index and return it.

You can try with:

```js
console.log(list.get(0));
```

You should see something like this:

```
<ref *2> Node {
  data: 'Hello',
  next: <ref *1> Node {
    data: 1,
    next: Node { data: 'World', next: [Node], prev: [Circular *1] },
    prev: [Circular *2]
  },
  prev: undefined
}
```

## `remove` Method

Let's add a method to remove a node at a specific index. We will call this method `remove`. It will take in an index and remove the node at that index.

```js
  remove(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.head = this.head?.next;
      if (this.head) {
        this.head.prev = undefined;
      } else {
        this.tail = undefined;
      }
    } else if (index === this.length - 1) {
      this.tail = this.tail?.prev;
      if (this.tail) {
        this.tail.next = undefined;
      } else {
        this.head = undefined;
      }
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode?.next;
      }

      currentNode?.prev && (currentNode.prev.next = currentNode?.next);
      currentNode?.next && (currentNode.next.prev = currentNode?.prev);
    }

    this.length--;
  }
```

We first check if the list is empty by checking if the `head` is `undefined`. If it is, we return.

If it is not empty, we continue and set the `currentNode` to the `head`.

We then loop through the list until we find the node with the data that we want to remove. If we find it, we check if it is the `head` node. If it is, we set the `head` to the `next` node. We also check if the `head` is not `undefined`. If it is not, we set the `prev` of the `head` to `undefined` because it is now the first node.

If the node is not the `head`, we check if it is the `tail` node. If it is, we set the `tail` to the `prev` node. We also set the `next` of the `tail` to `undefined` because it is now the last node.

If the node is neither the `head` nor the `tail`, we set the `next` of the `prev` node to the `next` node. We also set the `prev` of the `next` node to the `prev` node.

We then decrement the `length` and return `true`.

If we do not find the node, we return `false`.

You can test this out with the following code:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');
list.insert(2, 'World');
list.remove(4);

list.printAll();
```

You should now see something like this:

```text
Hello
1
World
2
3
```
