# Challenge: Binary Tree Maximum Depth

## Instructions

Write a function called `maxDepth` that takes the root of a binary tree as input and returns the maximum depth of the tree. The maximum depth is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

### Function Signature

```js
/**
 * Returns the maximum depth of the binary tree.
 * @param root The root node of the binary tree.
 * @returns The maximum depth of the binary tree.
 */
function maxDepth(root: Node): number;
```

### Examples

```js
// Explanation: The binary tree is as follows:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// The maximum depth is 3, which is the path 3 -> 20 -> 7.

// Explanation: The binary tree is as follows:
//     1
//      \
//       2
// The maximum depth is 2, which is the path 1 -> 2.

// Input: root = []
// Output: 0
// Explanation: An empty tree has a maximum depth of 0.
```

### Hints

- You can solve this problem using a depth-first traversal approach.
- Use recursion to explore the left and right subtrees of each node and return the maximum depth between them.

### Binary Tree Node

Here's the definition of the binary tree node:

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

export function maxDepth(root: Node<unknown> | undefined): number {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
```

### Explanation

- Check if the root node is `undefined`. If it is, return `0` since the tree is empty.
- Recursively calculate the maximum depth of the left and right subtrees of the current node.
- Return the maximum depth between the left and right subtrees plus `1` to account for the current node.

</details>
