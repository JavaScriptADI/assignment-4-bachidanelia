//1.Create an array of fruit names.
let fruits = ['Apple', 'Mango', 'Kiwi', 'Papaya', 'Coconut',];

//2.Add "Orange" to the end of the array.
fruits.push('orange');
console.log(fruits); // ['Apple', 'Mango', 'Kiwi', 'Papaya', 'Coconut', 'orange']

//3.Remove the last item and store it in a variable.
let saveLastItem = fruits.pop();
console.log(saveLastItem); // orange


//4.Add "Strawberry" to the beginning of the array.
fruits.unshift('Strawberry');
console.log(fruits); // ['Strawberry', 'Apple', 'Mango', 'Kiwi', 'Papaya', 'Coconut', 'orange']

//5.Remove the first item and store it in a variable.
let saveFirstItem = fruits.shift();
console.log(saveFirstItem); // Strawberry