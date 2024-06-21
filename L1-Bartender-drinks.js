// Complete the function that receives as input a string, and produces 
// outputs according to the following table:
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is 
// not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with 
// correct capitalization. For example, the input "pOLitiCIaN" should still 
// return "Your tax dollars".



//solution

function getDrinkByProfession(param){
    let inp = param.toLowerCase()
    switch (inp) {
     case 'Jabroni'.toLowerCase():
       return "Patron Tequila";
       break;
     case "School Counselor".toLowerCase():
        return 	"Anything with Alcohol";
       break;
     case 'Programmer'.toLowerCase():
       return "Hipster Craft Beer";
       break;
     case "Bike Gang Member".toLowerCase():
        return "Moonshine";
        break;
        case "Politician".toLowerCase():
        return 	"Your tax dollars";
        break;
        case "Rapper".toLowerCase():
        return "Cristal";
        break;
     default:
       return "Beer";
   }
   
   }