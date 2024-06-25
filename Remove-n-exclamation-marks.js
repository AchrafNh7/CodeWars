// Remove n exclamation marks in the sentence from left to right. 
// n is positive integer.
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"


//solution

function remove(s,n){
    let result = s
    for(let i = 0; i < n; i++){
      result = result.replace('!','')
    }
    return result
}