//importing the function from string2.cjs and storing in problem2_fn function
var problem2_fn=require('../string2.cjs');

//creating a string of ip adddress
let ipAddress = "111.139.161.143" ;

/*calling function with argument of string and storing what this function returns
i.e array of numbers in numArray variable*/
let numArray =problem2_fn(ipAddress);

//printing the numeric values
console.log(numArray);
