// Your task is simply to count the total number of lowercase letters in a string.



//solution

function lowercaseCount(str){
    return str.split('').filter(el=> el !== el.toUpperCase()).length
}