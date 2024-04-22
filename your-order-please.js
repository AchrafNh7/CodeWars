// Your task is to sort a given string. Each word in the string will contain a 
// single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input 
// String will only contain valid consecutive numbers.



//solution



function order(words){
    let word = words.split(' ')
    let newArr = []
    if (!words){return ''}
    for(let i = 0; i < word.length; i++){
      for(let j=0; j<word[i].length; j++){
        if(Number.isInteger(Number(word[i][j]))){
          let num = word[i][j]
           newArr[num - 1] = word[i]
        } 
      }
    }
    return newArr.join(' ')
  }