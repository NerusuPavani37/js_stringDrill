//importing the function from string3.cjs and storing in problem3_fn function
var problem3_fn =require('../string3.cjs');

//creating string of date
let str ="20/1/2021";

/*calling function with argument of string and storing what this function returns
i.e string which is the month in the date*/
let monthStr=problem3_fn(str);

//printing the month of the date
console.log(monthStr);