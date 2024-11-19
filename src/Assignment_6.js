//1.Create an array of numbers.
let numbers = [70, 55, 23, 12, 5, 79, 0, 8, 9, 10];

//2.Use `indexOf` to find the position of a specific number.
console.log(numbers.indexOf(0)); // 6

//3.Use `includes` to check if a specific number is present in the array.
console.log(numbers.includes(66)); // false

//4.Use `findIndex` to find the index of the first element greater than a certain value.
function bigNumber(number) {
    return number > 75;
};
console.log(numbers.findIndex(bigNumber)); // 5

//5.use `for loop` to find the index of the first element greater than a certain value.
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 75){
        console.log(numbers[i]);
        break;
    };
};