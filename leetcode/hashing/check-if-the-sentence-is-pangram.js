// https://leetcode.com/problems/check-if-the-sentence-is-pangram/solution/
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let seen = new Set()

    for (const c of sentence) {
        if (!seen.has(c))
            seen.add(c)
    }

    if (seen.size === 26)
        return true

    return false

};