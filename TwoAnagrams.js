/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const set = new Set(
        strs.map((s) => {
            return { [s]: s.split('').sort().join('') };
        })
    );

    const resultSet = {};
    for (const entries of set) {
        const [array] = Object.entries(entries);

        if (resultSet[array[1]])
            resultSet[array[1]] = [...resultSet[array[1]], array[0]];
        else resultSet[array[1]] = [array[0]];
    }
    return Object.values(resultSet);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
