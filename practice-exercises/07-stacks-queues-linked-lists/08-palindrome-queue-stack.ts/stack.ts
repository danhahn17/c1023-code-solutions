export class Stack<T> {
  readonly maxSize = 100;
  private stack: T[] = [];
  private top = -1;

  /** Adds an element to the top of the stack. */
  push(value: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  /** Removes the top element from the stack. */
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.top--;

    return this.stack.pop();
  }

  /** Gets the value of the top element in the stack. */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.top];
  }

  /** Check if the stack is empty. */
  isEmpty(): boolean {
    return this.top === -1;
  }

  /** Check if the stack is full. */
  isFull(): boolean {
    return this.top === this.maxSize - 1;
  }
}
