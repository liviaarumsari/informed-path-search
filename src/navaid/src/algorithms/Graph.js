import Point from "./Point.js";

class Graph {
  constructor(adjMatrix, nodeNames, nodePoints) {
    this.adjMatrix = adjMatrix;
    this.nodeNames = nodeNames;
    this.nodePoints = nodePoints;
  }

  getNodeName(nodeIndex) {
    return this.nodeNames[nodeIndex];
  }

  getAdjacentNodes(nodeName) {
    const nodeIndex = this.nodeNames.indexOf(nodeName);
    const adjacentNodes = [];

    for (let i = 0; i < this.adjMatrix[nodeIndex].length; i++) {
      if (this.adjMatrix[nodeIndex][i] > 0) {
        adjacentNodes.push(this.nodeNames[i]);
      }
    }

    return adjacentNodes;
  }

  getEdgeDistance(nodeIndex1, nodeIndex2) {
    return this.adjMatrix[nodeIndex1][nodeIndex2];
  }

  getEuclideanDistance(nodeIndex1, nodeIndex2) {
    return this.nodePoints[nodeIndex1].distanceTo(this.nodePoints[nodeIndex2]);
  }
}

export default Graph;
