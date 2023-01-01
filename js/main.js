/******************** EXERCICE 1   *******************/ 
/**
 * @author Wilfried Koua
 * @description the purpose of the code is to format a text gave by the user with a stars
 * @param :wordTypedByUser : string
 * @param :wordTypedArray  : Object
 * @returns wordFormated   : string
 */

//declaration of variables
const wordTypedByUser  = prompt("can you please enter a number");
let maxWordLength      = 5;
const splitElement     = ",";
const delimiter        = " * ";
const response         = drawMyInConsole(wordTypedByUser);



//creation of the fonction used to format all data passed
function launchStringFormat(stringToBeSplitted){
   
    const arrayCreated = splitElementUsingSeparator(stringToBeSplitted,splitElement);
    if(arrayCreated != null) {
         maxWordLength = getMaxElementSizeFromArray(arrayCreated);
         console.log(delimiter.repeat(maxWordLength));
         for(let item of arrayCreated){
            
            if(maxWordLength <= 3){
                console.log(" *"+item.split('').join(' ') + "  ".repeat( item.length != maxWordLength ? (maxWordLength) - (item.length) : 0) + " *")
            } else{
                console.log(" *"+"  "+item.split('').join(' ') + "  ".repeat( item.length != maxWordLength ? (maxWordLength) - (item.length) : 0) + " *")
            }          
         }
        return  console.log(delimiter.repeat(maxWordLength));
        
    };
    return console.log("can you please check your string gave");

};


//split element using a specifiq operator
function splitElementUsingSeparator(stringToBeSplitted , splitCharacter){
    if(typeof stringToBeSplitted == "string" && stringToBeSplitted.includes(splitCharacter)) 
        return  stringToBeSplitted.split(splitCharacter);
    return null;    
}

//this function is used to start de drawing process
function drawMyInConsole(elementInString){
   launchStringFormat(elementInString);
}

// this function is using to get the maximun item size of array an array passed
function getMaxElementSizeFromArray(arrayToBeLooped) {

    if(typeof arrayToBeLooped == 'object') {
        let maxElementOf  = arrayToBeLooped[0].length;
        for(item of arrayToBeLooped) {
            if(item.length > maxElementOf){
                maxElementOf = item.length
            }
        }

        return maxElementOf ;

    }
    return null;
}   

