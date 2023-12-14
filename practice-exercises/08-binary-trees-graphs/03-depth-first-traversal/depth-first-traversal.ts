export class Node<T> {
  data: T;
  left: Node<T> | undefined = undefined;
  right: Node<T> | undefined = undefined;

  constructor(data: T) {
    this.data = data;
  }
}

export function depthFirstTraversal(
  root: Node<unknown> | undefined
): unknown[] {
  return [];
}
