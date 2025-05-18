/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.trim().length === 0) return true;
    let regex = /[a-z\d]/gi;
    let normalized = s.toLowerCase().match(regex);
    if (!normalized) return true;
    let reverse = [...normalized].reverse().join('');

    return normalized.join('') === reverse;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('.'));
console.log(isPalindrome('.,'));
console.log(isPalindrome('0P'));
