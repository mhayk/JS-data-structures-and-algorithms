// https://leetcode.com/problems/flood-fill

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const rows = image.length
    const cols = image[0].length
    const currentColor = image[sr][sc]
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false))

    function isSameColor(r, c) {
        return r >= 0 && r < rows && c >= 0 && c < cols && image[r][c] == currentColor
    }

    function bfs(r, c) {
        let queue = [[r, c]]
        visited[r][c] = true;
        image[r][c] = color

        while (queue.length) {
            let [row, col] = queue.shift()

            for (let [dx, dy] of directions) {
                let newR = row + dx;
                let newC = col + dy;

                if (isSameColor(newR, newC)) {
                    if (!visited[newR][newC]) {
                        console.log(image)
                        queue.push([newR, newC])
                        visited[newR][newC] = true
                        image[newR][newC] = color
                    }
                }
            }
        }

        return image;
    }

    return bfs(sr, sc)

};