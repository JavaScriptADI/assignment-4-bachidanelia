//1.Create two arrays of numbers.
let firstNum = [1, 2, 3];
let secondNum = [4, 5, 6];

//2.Combine the two arrays into one using the `concat` method.
console.log(firstNum.concat(secondNum)); // [1, 2, 3, 4, 5, 6]

//3.Create a new array by combining the two arrays using the spread operator.
let totalNum = [...firstNum, ...secondNum];
console.log(totalNum); // [1, 2, 3, 4, 5, 6]