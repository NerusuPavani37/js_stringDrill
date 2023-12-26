//function takes object and combine the names of person and returns in title case
function combiningStrings(personName){
    //empty string created to strore the name
    let fullName ="";

    //function which capitalize 1st letter and make others lowercase letters and returns title case name
    function capitalize(name){
        //converts 1st character to upercase and remaing substring to lowercase
        let covertedName=name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();

        //returning the name
        return covertedName;
    }
    

    /*checking that object is having the key ot not and 
    calling function which make name title case and adding to the fullName*/
    if(personName.hasOwnProperty("firstName")){
        fullName = fullName + capitalize(personName.firstName);
    }

    if(personName.hasOwnProperty("middleName")){
        fullName = fullName + " "+capitalize(personName.middleName);
    }
    
    if(personName.hasOwnProperty("lastName")){
        fullName = fullName + " "+capitalize(personName.lastName);
    }

    //returning the name 
    return fullName;
}

module.exports=combiningStrings;//exports the function combiningStrings to testString4.cjs file