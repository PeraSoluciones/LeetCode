/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let parentheses = { '(': ')', '[': ']', '{': '}' };
    let array = s.split('');
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (parentheses[array[i]] === array[j]) {
            array.splice(i, 2);
            i--;
            j -= 2;
        } else i++;
    }

    return array.length < 1;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('({[]})'));
