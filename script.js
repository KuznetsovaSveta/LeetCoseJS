//1
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// let twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j=0; j < nums.length; j++) {
//             if(i === j) continue;
//             if (nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
//     return 1;
// };
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3,3], 6));



//2
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

let addTwoNumbers = function(l1, l2) {
    //1)перевернуть массив 1 и массив 2
    let arr1 = l1.reverse(),
        arr2 = l2.reverse();
    console.log(arr1);
    console.log(arr2);
    //2)преобразовать в строку, в число
    let num1 = +arr1.join(''),
        num2 = +arr2.join('');
    console.log(num1);
    console.log(num2);
    //3)сложить
    let sum = num1 + num2;
    // console.log(sum);
    //4)записать в массив
    sum = String(sum).split(['']);
    console.log(sum);
    //5)перевернуть сумму
    let sumRes = sum.reverse();
    console.log(sumRes);
};

// addTwoNumbers([2,4,3], [5,6,4]);
// addTwoNumbers([0], [0]);
// addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);



//3
// Given an integer x, return true if x is palindrome integer.
let isPalindrome = function(x) {
    let arrX = String(x).split(['']);
    let revX = String(x).split(['']);
    revX = revX.reverse();
    if(JSON.stringify(arrX) === JSON.stringify(revX)){
        return true;
    } else {
        return false;
    }
};
isPalindrome(121);

