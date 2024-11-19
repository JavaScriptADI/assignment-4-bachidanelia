//1.Create a 2D array representing a grid.
let names = [
    ['Mike', 'Zoë', 'Abernathy', 'Arlene'],
    ['Julia', 'Kim', 'Pam', 'Shanna'],
    ['Lee', 'Warren', 'Marcy', 'Nate'],
    ['Lanna', 'Omar', 'Jasper', 'Dov'],
];
//2.Access a specific element in the grid.
console.log(names[2][3]); // Nate

//3.Modify an element in the grid.
names[3][1] = "Don_Omar";
console.log(names);

/*['Mike', 'Zoë', 'Abernathy', 'Arlene']
['Julia', 'Kim', 'Pam', 'Shanna']
['Lee', 'Warren', 'Marcy', 'Nate']
['Lanna', 'Don_Omar', 'Jasper', 'Dov']*/