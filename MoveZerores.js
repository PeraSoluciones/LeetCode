/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length === 1) return nums;
    let index = 0;
    let counter = 1;
    while (index + counter <= nums.length - 1) {
        if (nums[index] === 0) {
            if (nums[index + counter] !== 0) {
                let aux = nums[index + counter];
                nums[index + counter] = nums[index];
                nums[index] = aux;
                index++;
                counter = 1;
            } else counter++;
        } else index++;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([1, 0]));
console.log(
    moveZeroes([
        45192, 0, -659, -52359, -99225, -75991, 0, -15155, 27382, 59818, 0,
        -30645, -17025, 81209, 887, 64648,
    ])
);
