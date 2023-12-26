//importing the function from string1.cjs and storing in problem1_fn function
var problem1_fn=require('../string1.cjs');

//creating array of strings
let strArray =["$100.2" , "$-1000.42" , "$650.89"  ];

/*calling function with argument of array of string and storing what this function returns
i.e converted numbers of array in numArray variable*/
let numArray =problem1_fn(strArray);

//printing the array of numbers 
console.log(numArray);