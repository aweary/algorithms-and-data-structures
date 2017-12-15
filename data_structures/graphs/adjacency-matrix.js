export default class IntAdjacencyMatrix {
  constructor(n) {
    // Create an NxN matrix.
    this.matrix = [];
    this.max = n;
  }

  addVertex(vertex) {
    if (vertex > this.max) {
      throw new Error(
        `Unable to represent vertex ${vertex}, ` +
          `the max value is ${this.max}`
      );
    }
    if (!this.matrix[vertex]) {
      this.matrix[vertex] = []
    }
  }

  addEdge(n, m) {
    // Add the verticies if they don't exist
    this.addVertex(n);
    this.addVertex(m);
    this.matrix[n][m] = true;
  }

  isConnected(n, m) {
    return this.matrix[n] && this.matrix[n][m] === true;
  }
  
}
