//1.Create an array with 4 elements.
let nature = ['air', 'water', 'earth', 'fire'];

//2.Use destructuring to extract the first and second elements into variables.
let [first, second] = nature;

console.log(first); // air
console.log(second); // water

//3.Swap the values of two variables using array destructuring.
[first, second] = [second, first];

console.log(first); // water
console.log(second); // air