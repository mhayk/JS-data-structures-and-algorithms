//https://leetcode.com/problems/find-if-path-exists-in-graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    if (edges.length === 0. && source === 0) return true;

    const adjacencyList = Array.from({ length: n }, () => [])

    for (const [u, v] of edges) {
        adjacencyList[u].push(v)
        adjacencyList[v].push(u)
    }

    if (adjacencyList[destination].length === 0)
        return false;

    const visited = Array(n).fill(false)
    const queue = [source]

    while (queue.length) {
        const currentVertex = queue.shift()

        visited[currentVertex] = true

        if (currentVertex === destination) return true

        for (const neighbor of adjacencyList[currentVertex]) {
            if (!visited[neighbor]) {
                queue.push(neighbor)
            }
        }
    }

    return false

};