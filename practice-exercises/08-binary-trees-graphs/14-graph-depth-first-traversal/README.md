# Challenge: Graph Depth-First Traversal

## Instructions

Write a function called `depthFirstTraversal` that performs a Depth First Traversal of a graph starting from a specified vertex and returns an array containing the vertices visited in the order they were traversed. Use the `Graph` class as well as the `Stack` class from the previous lessons.

## Function Signature

```js
/**
 * Returns an array containing the vertices visited in the order they were traversed.
 * @param graph The graph to traverse.
 * @param startingVertex The vertex to start the traversal from.
 * @returns The vertices visited in the order they were traversed.
 */
function depthFirstTraversal(graph: Graph, startingVertex: string): string[];
```

## Example

```js
// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

const graph = new Graph();

// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

depthFirstTraversal(g, 'A');
// ['A', 'C', 'E', 'F', 'D', 'B'];
```

## Hints

- The `Graph` class has an `adjacencyList` property that stores the vertices and their neighbors.
- The `Stack` class has a `push` method that adds an element to the top of the stack and a `pop` method that removes the top element from the stack.
- Use a results array to store the vertices visited in the order they were traversed

## Solutions

<details>
  <summary>Click For Solution</summary>

#### Using an adjacency list:

```js
export function depthFirstTraversal(
  graph: Graph,
  startingVertex: string
): string[] {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  const visited: Record<string, boolean> = {};
  const stack = new Stack<string>();
  const result: string[] = [];

  stack.push(startingVertex);

  visited[startingVertex] = true;

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
    if (!currentVertex) break;
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }

  return result;
}
```

### Explanation

- Check if the starting vertex exists in the graph's adjacency list. If it doesn't, return an empty array.
- Initialize an empty object called `visited` to store the vertices visited.
- Initialize a stack with the starting vertex.
- Initialize an empty array called `result` to store the vertices visited in the order they were traversed.
- Mark the starting vertex as visited.
- While the stack is not empty:
  - Pop a vertex from the stack and push it to the `result` array.
  - For each neighbor of the vertex:
    - If the neighbor has not been visited:
      - Mark the neighbor as visited.
      - Push the neighbor to the stack.
- Return the `result` array.

</details>
