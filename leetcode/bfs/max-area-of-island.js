// https://leetcode.com/problems/max-area-of-island
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const rows = grid.length
    const cols = grid[0].length
    let biggest = 0
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false))

    function isIsland(r, c) {
        return r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === 1
    }

    function bfs(r, c) {
        let queue = [[r, c]]
        visited[r][c] = true;
        let land = 0

        while (queue.length) {
            let [row, col] = queue.shift()

            for (let [dx, dy] of directions) {
                let newR = row + dx;
                let newC = col + dy;

                if (isIsland(newR, newC)) {
                    if (!visited[newR][newC]) {
                        land++
                        queue.push([newR, newC])
                        visited[newR][newC] = true
                    }
                }
            }
        }

        return land
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                let size = bfs(i, j)
                size += 1
                if (size > biggest) {
                    biggest = size
                }
            }
        }
    }

    return biggest;
};