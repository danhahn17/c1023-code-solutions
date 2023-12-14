export class Queue<T> {
  maxSize = 100;
  private queue: T[] = [];
  private head = 0;
  private tail = 0;

  /** Adds an item to the end of the queue. */
  enqueue(item: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = item;
    this.tail++;
    return true;
  }

  /** Removes the first element from the queue. */
  dequeue(): T {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }

  /** Gets the value of the first element in the queue. */
  peek(): T | undefined {
    return this.queue[this.head];
  }

  /** Get the length of the queue. */
  getLength(): number {
    return this.tail - this.head;
  }

  /** Checks if the queue is empty. */
  isEmpty(): boolean {
    return this.getLength() === 0;
  }

  /** Checks if the queue is full. */
  isFull(): boolean {
    return this.getLength() === this.maxSize;
  }
}
