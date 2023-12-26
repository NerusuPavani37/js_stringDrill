//importing the function from string4.cjs and storing in problem4_fn function
var problem4_fn=require('../string4.cjs');

//creating object of person
let personName={
    firstName :"lavAnyA",
    middleName :"chAndra",
    lastName : "paVANI"
}
    
/*calling function with argument of object and storing what this function returns
i.e title case name*/
let titleCasedName=problem4_fn(personName);

//printing the name
console.log(titleCasedName);