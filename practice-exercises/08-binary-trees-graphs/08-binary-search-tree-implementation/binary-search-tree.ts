export class Node {
  value: number;
  left: Node | undefined = undefined;
  right: Node | undefined = undefined;

  constructor(value: number) {
    this.value = value;
  }
}

export class BinarySearchTree {}
