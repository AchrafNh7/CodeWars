// Check to see if a string has the same amount of 'x's and 'o's. The method 
// must return a boolean and be case insensitive. The string can contain any 
// char.


//solution


function XO(str) {
    let X = str.split('').filter(el=> el.toLowerCase()=='x').length
    let O = str.split('').filter(el=> el.toLowerCase()=='o').length
    return X === O
}