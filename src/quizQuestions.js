//1. What method would you use to add an element to the end of an array?
let addSomething = ['car', 'bike'];
addSomething.push('boat');
console.log(addSomething); // ['car', 'bike', 'boat']

//2. How do you remove the first element from an array?
let countries = ['russia', 'Georgia', 'France', 'Germany'];
countries.shift();
console.log(countries); ['Georgia', 'France', 'Germany'];

//3. What is the difference between `splice` and `slice`?
let goodCarBrands = ['Audi', 'Mercedes', 'Volkswagen', 'Jaguar', 'Lada'];
goodCarBrands.splice(4, 1, 'Bently', 'BMW');
console.log(goodCarBrands); // ['Audi', 'Mercedes', 'Volkswagen', 'Jaguar', 'Bently', 'BMW']

let fruits = ['crayon', 'pinapple', 'apple', 'pen', 'pencil'];
let removeOthers = fruits.slice(1, 3);
console.log(removeOthers); // ['pinapple', 'apple']
/*fruits.slice(1, 3);
console.log(fruits);*/

// 4. How do you find the length of an array?
let numbers = ['1', '2', '0', '1', '4', '7', '5', '0', '7', '6', '6', '7', '5', '2', '5', '4', '6', '3', '9', '8', '0',];
console.log(numbers.length); // 21

// 5. How can you check if an array includes a certain element?
let weather = ['wind', 'rain', 'clouds'];
console.log(weather.includes('rain')); // true
console.log(weather.includes('sun')); // false

// 6. What is the result of calling `sort` on an array of numbers without a compare function?
let numArray = [5, 1, 3, 2, 4];
numArray.sort;
console.log(numArray); // [5, 1, 3, 2, 4]
numArray.sort();
console.log(numArray); // [1, 2, 3, 4, 5]

// 7. How do you create a copy of an array?

// 8. How do you reverse the elements in an array?
let reverseNumbers = [500, 400, 300, 200, 100];
console.log(reverseNumbers.reverse()); // [100, 200, 300, 400, 500]

// 9. What method can you use to combine two arrays?
let smallAnimals = ['dog', 'cat', 'hamster'];
let bigAnimals = ['cow', 'bull', 'bizon'];
let allAnimals = smallAnimals.concat(bigAnimals);
console.log(allAnimals); // ['dog', 'cat', 'hamster', 'cow', 'bull', 'bizon']

// 10. How do you access a specific element in a 2D array?
let customers = [
    ['Vincent', 'Jules', 'Butch',],
    ['Mia', 'Marsellus', 'Marvin',],
    ['Zed', 'Pumpkin', 'Koons',],
];
console.log(customers[0][2]); //Butch
console.log(customers[2][1]); //Pumpkin