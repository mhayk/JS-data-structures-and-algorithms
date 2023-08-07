// https://leetcode.com/problems/keys-and-rooms/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let visited = new Set();

    let queue = [0];

    while (queue.length) {
        let currentRoom = queue.shift();
        visited.add(currentRoom)

        for (let key of rooms[currentRoom]) {
            if (!visited.has(key))
                queue.push(key)
        }
    }

    return visited.size === rooms.length
};