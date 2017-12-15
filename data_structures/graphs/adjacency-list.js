// @flow

type EdgeNode<T> = {
  vertex: number,
  data: T,
  next: EdgeNode<*>
};

type VertexMap = {
  [number]: Array<number>
};

export default class AdjacencyList {
  edges: Array<EdgeNode<*>>;
  verticies: VertexMap;
  edgeCount: number;
  vertexCount: number;

  constructor() {
    this.edges = [];
    this.verticies = {};
    this.edgeCount = 0;
    this.vertexCount = 0;
  }

  addVertex(n: number) {
    if (!this.verticies[n]) {
      this.verticies[n] = [];
    }
  }
}