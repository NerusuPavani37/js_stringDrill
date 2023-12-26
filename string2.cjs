
//function takes string as parameter and returns the array of numbers 
function convertingStringToAnArray(ipAddress){

   //by using split function making string as array of string 
   let splitedArray = ipAddress.split('.');

   //created empty array to push converted numbers
   let convertedArray =[];

   //dor loop to iterate over the string array
   for(let i=0;i<splitedArray.length;i++){

    //converting string to number
      let num=Number(splitedArray[i]);
      
    //pushing the converted number int the array
      convertedArray.push(num);
   }
   //returning the array of numbers
   return convertedArray;
}

module.exports=convertingStringToAnArray; //exports the function convertToNumeric to testString2.cjs file