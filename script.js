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
// let isPalindrome = function(x) {
//     let arrX = String(x).split(['']);
//     let revX = String(x).split(['']);
//     revX = revX.reverse();
//     if(JSON.stringify(arrX) === JSON.stringify(revX)){
//         return true;
//     } else {
//         return false;
//     }
// };
// isPalindrome(121);



//4
//Given a roman numeral, convert it to an integer.
let romanToInt = function(s) {
    let resInt = 0;
    for (let i = 0; i < s.length; i++){
        if(s[i] === 'I') {
            if (s[i + 1] === 'V') {
                resInt += 4;
                i++;
            } else if(s[i + 1] === 'X'){
                resInt += 9;
                i++;
            } else  resInt += 1;
        } else if(s[i] === 'V'){
            resInt += 5;
        } else if(s[i] === 'X'){
            if(s[i + 1] === 'L'){
                resInt += 40;
                i++;
            } else if(s[i + 1] === 'C'){
                resInt += 90;
                i++;
            } else resInt += 10;
        } else if(s[i] === 'L'){
            resInt += 50;
        } else if(s[i] === 'C'){
            if (s[i + 1] === 'D') {
                resInt += 400;
                i++;
            } else if(s[i + 1] === 'M'){
                resInt += 900;
                i++;
            } else resInt += 100;
        } else if(s[i] === 'D') {
            resInt += 500;
        } else if(s[i] === 'M'){
            resInt += 1000;
        } else resInt = 'Error';
    }
    return resInt;
};

romanToInt("MCMXCIV");



//5
//Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
let mySqrt = function(x) {
    for (let i = 0; i <= x; i++) {
        if (i * i === x) return i;
        if ((i * i < x) && ((i + 1) * (i + 1) > x)) return i;
    }
};

mySqrt(9);



//6
//Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.
let isPerfectSquare = function(num) {
    for (let i = 0; i <= num; i++) {
        if (i * i === num) return true;
        if ((i * i < num) && ((i + 1) * (i + 1) > num)) return false;
    }
};

isPerfectSquare(16);
