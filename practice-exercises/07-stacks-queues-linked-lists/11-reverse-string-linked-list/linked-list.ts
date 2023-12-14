export class Node<T> {
  /** The data the node holds. */
  data: T;
  /** The next node in the list. */
  next: Node<T> | undefined = undefined;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  /** The head of the list. */
  head: Node<T> | undefined = undefined;
  /** The tail of the list. */
  tail: Node<T> | undefined = undefined;

  /** Adds a node to the end of the list. */
  /*
    Time Complexity: O(1)
    Space Complexity: O(1)
  */
  add(data: T): void {
    const node = new Node<T>(data);

    if (this.head === undefined) {
      this.head = node;
    } else if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  /** Get a single node at a specific index. */
  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  get(index: number): T | undefined {
    let current = this.head;
    if (!current) return undefined;
    let i = 0;

    while (i < index && current) {
      current = current.next;
      i++;
    }

    return current?.data;
  }

  /** Inserts at a specific index. */
  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  insertAt(index: number, data: T): void {
    if (index === 0) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous;
      let i = 0;

      while (i < index && current) {
        previous = current;
        current = current.next;
        i++;
      }

      const node = new Node(data);
      node.next = current;
      previous && (previous.next = node);
    }
  }

  /** Removes a node from a specific index. */
  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  removeFrom(index: number): void {
    if (index === 0) {
      this.head = this.head?.next;
    } else {
      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current?.next;
        i++;
      }

      previous && (previous.next = current?.next);
    }
  }

  /** Prints all the nodes in the list. */
  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  printAll(): void {
    let current = this.head;

    while (current !== undefined) {
      console.log(current.data);
      current = current.next;
    }
  }
}
