//1
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j=0; j < nums.length; j++) {
            if(i === j) continue;
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
    return 1;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,3], 6));