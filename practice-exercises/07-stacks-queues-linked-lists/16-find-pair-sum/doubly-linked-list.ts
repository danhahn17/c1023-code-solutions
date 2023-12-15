class Node<T> {
  data: T;
  next: Node<T> | undefined = undefined;
  prev: Node<T> | undefined = undefined;
  constructor(data: T) {
    this.data = data;
  }
}

export class DoublyLinkedList<T> {
  /** Head points to the first node in the list */
  head: Node<T> | undefined;
  /** Tail points to the last node in the list */
  tail: Node<T> | undefined;
  /** Length of the list */
  length = 0;

  /** Adds a new node to the end of the list. */
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

  /** Add a new node to the beginning of the list. */
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

  /** Inserts a new node at the specified index. */
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

  /** Gets the node at the specified index. */
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

  /** Removes the node at the specified index. */
  remove(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      // Removing the first node
      this.head = this.head?.next;
      if (this.head) {
        this.head.prev = undefined;
      } else {
        this.tail = undefined;
      }
    } else if (index === this.length - 1) {
      // Removing the last node
      this.tail = this.tail?.prev;
      if (this.tail) {
        this.tail.next = undefined;
      } else {
        this.head = undefined;
      }
    } else {
      // Removing a node in the middle
      let currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode?.next;
      }

      currentNode?.prev && (currentNode.prev.next = currentNode?.next);
      currentNode?.next && (currentNode.next.prev = currentNode?.prev);
    }

    this.length--;
  }

  /** Checks if the list contains a node with the specified data. */
  contains(data: T): boolean {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  /** Prints all the nodes in the list. */
  printAll(): void {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
