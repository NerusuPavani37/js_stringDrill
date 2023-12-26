
//function which retuens string
function convertedString(arrayOfStrings){
    //by using join method of array i joined all the elements of array with " ";
    let str = arrayOfStrings.join(' ');

    //returns the combined string
    return str;
}

module.exports=convertedString;//exports the function convertedString to testString5.cjs file