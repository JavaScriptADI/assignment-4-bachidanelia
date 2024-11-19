//1.Create an array of numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7];

//2.Use the `splice` method to remove the second and third elements.
numbers.splice(1, 2);
console.log(numbers); // [1, 4, 5, 6, 7]

//3.Use the `splice` method to add two numbers at the second position.
numbers.splice(1, 0, 6, 9);
console.log(numbers); // [1, 6, 9, 4, 5, 6, 7]

//4.Use the `slice` method to create a new array containing the last three elements of the original array.
let newArray = numbers.slice(4, 7);
console.log(newArray); // [5, 6, 7]