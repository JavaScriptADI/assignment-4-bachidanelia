//1.Create an array of numbers from 1 to 10.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//2.Access the third element in the array.
console.log(numbers[2]); // 3

//3.Change the value of the fifth element to 15.
numbers.splice(4, 5, 15);
console.log(numbers); // [1, 2, 3, 4, 15, 10]

//4.Add a number at the end of the array.
numbers.push(69);
console.log(numbers); // [1, 2, 3, 4, 15, 10, 69]

//5.Remove the first element from the array.
numbers.shift();
console.log(numbers); // [1, 2, 3, 4, 15, 10, 69]