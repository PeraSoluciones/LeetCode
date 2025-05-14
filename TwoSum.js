/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    let sum = nums[i] + nums[i + 1];
    if (sum === target) break;
  }
  return [i, i + 1];
};

let result = twoSum([2, 7, 11, 15], 9);
console.log(result);

result = twoSum([3, 2, 4], 6);
console.log(result);

result = twoSum([3, 3], 6);
console.log(result);

result = twoSum([3, 2, 3], 6);
console.log(result);
