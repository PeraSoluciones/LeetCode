/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let left = 0;
    let right = 1;
    let set = new Set([s[left]]);
    let max = set.size;
    for (right; right < s.length; right++) {
        if (set.has(s[right]) && s.length > 2) {
            left++;
            right = left + 1;
            set.clear();
            set.add(s[left]);
        }
        set.add(s[right]);
        max = Math.max(max, set.size);
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('anviaj'));
console.log(lengthOfLongestSubstring('aa'));
console.log(lengthOfLongestSubstring('aab'));
