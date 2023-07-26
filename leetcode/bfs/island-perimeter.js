// https://leetcode.com/problems/island-perimeter/
/**
O vetor de direções é uma ferramenta comumente usada em problemas de programação
que envolvem a navegação através de uma grade ou matriz bidimensional.

Aqui, definimos o vetor de direções como
directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];.
Cada sub-vetor dentro do vetor de direções representa um movimento possível na
grade, sendo:

[-1, 0]: mover para cima. Isso significa que se estamos na célula (i, j),
vamos para a célula (i-1, j).
[1, 0]: mover para baixo. Isso significa que se estamos na célula (i, j), vamos
para a célula (i+1, j).
[0, -1]: mover para a esquerda. Isso significa que se estamos na célula (i, j),
vamos para a célula (i, j-1).
[0, 1]: mover para a direita. Isso significa que se estamos na célula (i, j),
vamos para a célula (i, j+1).
*/

/**
Quando realizamos a Busca em Largura (BFS), estamos percorrendo todas as células
de terra que estão conectadas na grade. Para cada célula de terra que visitamos,
queremos verificar todas as suas células vizinhas (cima, baixo, esquerda, direita).

Então, para cada célula vizinha, temos duas possibilidades:

A célula vizinha é terra (isLand(newR, newC) === true). Nesse caso, se ainda não
visitamos essa célula de terra, adicionamos ela à fila (queue) para ser processada
posteriormente e marcamos como visitada.

A célula vizinha é água (isLand(newR, newC) === false) ou está fora da grade.
Nesse caso, essa célula representa uma "borda" para a ilha, e nós incrementamos
o perímetro em 1 (perimeter++).

Basicamente, estamos contando quantas células de água (ou células fora da grade)
estão em contato com as células de terra da ilha. Como cada uma dessas células
contribui com 1 para o perímetro total da ilha, incrementamos o perimeter toda
vez que encontramos uma.

O incremento do perimeter dentro da função bfs é fundamental para calcular o
perímetro da ilha corretamente. Isso garante que estamos contabilizando todas
as "bordas" da ilha, que são as células de terra que têm pelo menos uma célula
de água como vizinha.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const rows = grid.length
    const cols = grid[0].length
    let perimeter = 0
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false))

    function isLand(r, c) {
        return r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === 1;
    }


    function bfs(r, c) {
        let queue = [[r, c]]
        visited[r][c] = true;

        while (queue.length) {
            let [row, col] = queue.shift()

            /* walk around, up, down, left and right */
            for (let [dx, dy] of directions) {
                let newR = row + dx;
                let newC = col + dy

                if (isLand(newR, newC)) {
                    if (!visited[newR][newC]) {
                        queue.push([newR, newC])
                        visited[newR][newC] = true;
                    }
                } else {
                    perimeter++;
                }
            }
        }
    }

    // find first land cell then start BFS from there.
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                bfs(i, j)
                /*  There's only one island, so we can return once
                    we're done with the BFS.
                */
                return perimeter
            }
        }
    }

    return 0;

};