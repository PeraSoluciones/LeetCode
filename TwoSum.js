/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Hashmap used
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // Use formula complement = target - nums[i]
    let complement = target - nums[i];
    // If complement already exists return position array
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    // else add to map
    map.set(nums[i], i);
  }
  return [];
};

// let result = twoSum([2, 7, 11, 15], 9);
// console.log(result);

// result = twoSum([3, 2, 4], 6);
// console.log(result);

// result = twoSum([3, 3], 6);
// console.log(result);

result = twoSum([3, 2, 3], 6);
console.log(result);
