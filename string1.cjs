//function takes string Array as parameter and returns the array of numbers 
function convertToNumeric(strArray){
    //creating empty array to store numbers in it
     let numericArray=[];
     for(let i=0;i<strArray.length;i++){//for loop which iterate throgh all elements in array
        let str=strArray[i];//storing string of element at ith place in str variable

        //removing $ symbol which present at the index of 0 using substring from index 1 removed that symbol
        let numStr =str.substring(1);
        
        //now using Number function i converted string of number to number
        let numValue=Number(numStr);

        //checking wheater it is number or not
        if(isNaN(numValue)){
            numericArray.push(0);
        }
        else{//if it is a number
             //pushes coverted number to numericArray
             numericArray.push(numValue);
        }
        
     }
     return numericArray;//returns the array of numbers
}

module.exports=convertToNumeric;//exports the function convertToNumeric to testString1.cjs file