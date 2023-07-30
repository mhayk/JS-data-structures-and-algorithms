// https://leetcode.com/problems/all-paths-from-source-to-target
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let result = [];
    let queue = [[0]];

    while (queue.length) {
        let path = queue.shift(); // Remove o primeiro elemento da fila
        let lastNode = path[path.length - 1];

        // Se o último nó é o nó de destino, adicione o caminho ao resultado
        if (lastNode === graph.length - 1) {
            result.push(path);
        } else {
            // Para cada nó vizinho do último nó, crie um novo caminho e adicione-o à fila
            for (let neighbor of graph[lastNode]) {
                let newPath = [...path]; // Crie uma cópia do caminho atual
                newPath.push(neighbor); // Adicione o nó vizinho ao novo caminho
                queue.push(newPath); // Adicione o novo caminho à fila
            }
        }
    }

    return result;
}