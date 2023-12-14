export class Graph {
  adjacencyList: Record<string, string[]> = {};

  /** Adds a vertex. */
  addVertex(vertex: string): void {
    this.adjacencyList[vertex] = [];
  }

  /** Adds an edge between vertex1 and vertex2. */
  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /** Removes an edge between vertex1 and vertex2. */
  removeEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  /** Removes a vertex from the graph. */
  removeVertex(vertex: string): void {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      adjacentVertex && this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  /** Prints the adjacency list. */
  printAdjacencyList(): void {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
    }
  }
}
