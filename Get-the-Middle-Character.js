// You are going to be given a word. Your job is to return the middle character 
// of the word. If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.


//solution


function getMiddle(s){
  let splitedString = s.split('')
  let middle = Math.floor(splitedString.length / 2)
  if(splitedString.length % 2 === 0){
    return splitedString[middle-1] + splitedString[middle]
  }else{
    return splitedString[middle]
  }
  return splitedString
}