//importing the function from string5.cjs and storing in problem5_fn function
var problem5_fn=require('../string5.cjs');

//creating array of strings
let arrayOfStrings =["the", "quick", "brown", "fox"];

/*calling function with argument of array of strings and storing what this function returns
i.e string of all elements in the array*/
let convertedString =problem5_fn(arrayOfStrings);

//printing the string
console.log(convertedString);