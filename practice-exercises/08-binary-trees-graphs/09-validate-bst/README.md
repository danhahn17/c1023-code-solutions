# Challenge: Validate Binary Search Tree

## Instructions

Write a function called `isValidBST` that takes in the following parameters:

- `root` - The root/current node of a binary tree.

The function should return a boolean indicating whether the binary tree is a valid binary search tree (BST).

You want to check ALL subtrees, not just the right and left of the root node. You probably want to create a helper function to call recursively that takes in a `min` and `max` value. Make sure that anything on the left of the node is less than the max (parent node) and anything on the right is more than the min (parent node).

### Binary Tree Node

Here's the definition of the binary tree node:

```js
export class Node {
  value: number;
  left: Node | undefined = undefined;
  right: Node | undefined = undefined;

  constructor(value: number) {
    this.value = value;
  }
}
```

### Valid Binary Search Tree (BST)

A binary search tree (BST) is a binary tree where each node has a value, and all the nodes in the left subtree have values less than the current node's value, while all the nodes in the right subtree have values greater than the current node's value. Additionally, the left and right subtrees must also be valid binary search trees.

### Function Signature

```js
/**
 * Returns a boolean indicating whether the binary tree is a valid binary search tree (BST).
 * @param root The root node of the binary tree.
 * @returns A boolean indicating whether the binary tree is a valid binary search tree (BST).
 */
function isValidBST(root: Node): boolean;
```

### Examples

```js
// Input: root = [2,1,3]
// Output: true
// Explanation: The binary tree is as follows:
//     2
//    / \
//   1   3
// This is a valid binary search tree.

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The binary tree is as follows:
//      5
//     / \
//    1   4
//       / \
//      3   6
// The node with a value of 4 has its left child with a value of 3, which violates the BST property, so it is not a valid BST.
```

### Hints

- You can solve this problem using a depth-first traversal approach.
- Use recursion to explore the left and right subtrees of each node and check if the current node's value is within the valid range based on its position in the binary search tree.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
export class Node {
  value: number;
  left: Node | undefined = undefined;
  right: Node | undefined = undefined;

  constructor(value: number) {
    this.value = value;
  }
}

export function isValidBST(root: Node): boolean {
  // Helper function to check if all values in a subtree are within the specified range
  function isValidSubtree(
    node: Node | undefined,
    min?: number,
    max?: number
  ): boolean {
    if (!node) {
      return true;
    }

    if (
      (min !== undefined && node.value <= min) ||
      (max !== undefined && node.value >= max)
    ) {
      return false;
    }

    // For the left subtree, values must be less than the current node's value (max = node.value)
    // For the right subtree, values must be greater than the current node's value (min = node.value)
    return (
      isValidSubtree(node.left, min, node.value) &&
      isValidSubtree(node.right, node.value, max)
    );
  }

  return isValidSubtree(root, undefined, undefined);
}
```

### Explanation

The solution to this problem is to use a depth-first traversal approach to recursively explore the left and right subtrees of each node and check if the current node's value is within the valid range based on its position in the binary search tree.

- Create a helper function, `isValidSubtree` to check if all values in a subtree are within a specified range.
- In the helper function:
  - Check if the current node is `undefined`. If it is, return `true` because an empty tree is a valid binary search tree.
  - Check if the current node's value is less than or equal to the `min` value or greater than or equal to the `max` value. If it is, return `false` because the current node's value is not within the valid range based on its position in the binary search tree.
  - Recursively call the `isValidSubtree` function on the current node's left subtree, passing in the `min` value and the current node's value as the `max` value.
  - Recursively call the `isValidSubtree` function on the current node's right subtree, passing in the current node's value as the `min` value and the `max` value.
- Cal the helper function on the root with initial range of `undefined`.

### Try It Out

Let's test out our solution with the following binary search tree:

```js
/*

     8
    / \
   4   10
  / \
 2   6

*/
```

```js
const root = new Node(8);
const node4 = new Node(4); // left
const node10 = new Node(10); // right
const node2 = new Node(2); // left
const node6 = new Node(6); // right

root.left = node4;
root.right = node10;
node4.left = node2;
node4.right = node6;

console.log(isValidBST(root));
```

</details>
