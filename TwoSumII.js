/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let total = numbers[left] + numbers[right];

        if (total === target) {
            return [left + 1, right + 1];
        } else if (total > target) {
            right--;
        } else {
            left++;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
