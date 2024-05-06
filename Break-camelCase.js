// Complete the solution so that the function will break up camel casing, using 
// a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



//solution



function solution(string) {
    if(string.length === 0){return ''};
    let arr = []
    for(let i = 0; i < string.length; i++){
      if(string[i].toUpperCase() === string[i]){
        arr.push(' ')
        arr.push(string[i])
      }else{
        arr.push(string[i])
      }
    }
    return arr.join('')
  }