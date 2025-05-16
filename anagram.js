/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let _s = s.split('').sort();
    let _t = t.split('').sort();

    if (_s.length !== _t.length) return false;

    for (let i = 0; i < _s.length; i++) {
        if (_s[i] !== _t[i]) return false;
    }

    return true;
};

// console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('a', 'ab'));
