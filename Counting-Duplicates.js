// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in 
// the input string. The input string can be assumed to contain only 
// alphabets (both uppercase and lowercase) and numeric digits.


//soution


function duplicateCount(text){
    let obj = {}
    let sum = 0
    for(let letter of text){
      letter = letter.toLowerCase()
      if(!obj[letter]){
        obj[letter] = 1
      }else{
        obj[letter] += 1  
      }
    }
    for(let i in obj){
      if(obj[i] > 1){
        sum += 1
      }
    }return sum
  }