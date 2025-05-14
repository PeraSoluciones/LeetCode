/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Dictionary used to store the index of each number
  let pairIndex = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // If the difference between the current number and the target is in the dictionary we save the index
    if (target - num in pairIndex) return [pairIndex[target - num], i];
    pairIndex[num] = i;
  }
};

// let result = twoSum([2, 7, 11, 15], 9);
// console.log(result);

// result = twoSum([3, 2, 4], 6);
// console.log(result);

// result = twoSum([3, 3], 6);
// console.log(result);

result = twoSum([3, 2, 3], 6);
console.log(result);
