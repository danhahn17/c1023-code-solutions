# Challenge: Recursive Depth First Traversal

## Instructions

Write a function called `recDepthFirstTraversal` that takes the root node of a binary tree as input and returns an array containing the nodes visited in depth-first order. You can use the last lesson as a reference, but you must use recursion to solve this problem.

Depth-first traversal is an algorithm that starts at the root node and explores as far as possible along each branch before backtracking. The nodes are visited in the order they are encountered during the traversal.

The `Node` class is provided for you:

```js
export class Node<T> {
  data: T;
  left: Node<T> | undefined = undefined;
  right: Node<T> | undefined = undefined;

  constructor(data: T) {
    this.data = data;
  }
}
```

You can assume that the binary tree is not empty.

### Example

```js
const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');

depthFirstTraversal(root); // should return ['a', 'b', 'd', 'e', 'c', 'f']
```

### Hints

- You can implement the depth-first traversal recursively using a helper function that is called on the left and right subtrees of the current node.
- The base case is when the node is `undefined`, in which case we simply return from the function.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
export class Node<T> {
  data: T;
  left: Node<T> | undefined = undefined;
  right: Node<T> | undefined = undefined;

  constructor(data: T) {
    this.data = data;
  }
}

export function recDepthFirstTraversal<T>(root: Node<T>): T[] {
  const result: T[] = [];

  function traverse(node: Node<T> | undefined): void {
    if (node !== undefined) {
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}
```

### Explanation

- Initialize an empty array called `result` to store the nodes visited in depth-first order.
- Define a helper function called `traverse` that takes in a node as input.
- If the node is not `undefined`, push the node's data to the `result` array.
- Call `traverse` on the left subtree of the current node.
- Call `traverse` on the right subtree of the current node.
- Call `traverse` on the root node to start the traversal.
- Return the `result` array.

</details>
