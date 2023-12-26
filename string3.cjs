//function takes string as parameter and returns wanted part of the string (month)
function printingMonth(str){
    //by using substring i got the month in the given date
    let month=str.substring(3,4);
    //returning the month
    return month;
}

module.exports=printingMonth;//exports the function printingMonth to testString3.cjs file