const Colors = {
  // This represents that the vertex has not been visited.
  WHITE: 0,
  // This represents that the vertex has been visited but not explored.
  GREY: 1,
  // This represents that the vertex has been completely explored.
  BLACK: 2,
};
class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  /*
  This method receives two vertices as parameters, which are the vertices we
  want to link in the graph. Before we link the vertices, we will verify if
  the vertices exist in the graph.
  */
  addEgde(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w);
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEgde('A', 'B');
graph.addEgde('A', 'C');
graph.addEgde('A', 'D');

graph.addEgde('C', 'D');
graph.addEgde('C', 'G');

graph.addEgde('D', 'G');
graph.addEgde('D', 'H');

graph.addEgde('B', 'E');
graph.addEgde('B', 'F');

graph.addEgde('E', 'I');

console.log(graph.toString(), '\n----');

const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = [];

  queue.push(startVertex);

  while (queue.length > 0) {
    const u = queue.shift();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.push(w);
      }
    }

    color[u] = Colors.BLACK;
    if (callback) { callback(u); }
  }
};

const printVertex = (value) => console.log(`Visited vertex: ${value}`);

breadthFirstSearch(graph, myVertices[0], printVertex);
