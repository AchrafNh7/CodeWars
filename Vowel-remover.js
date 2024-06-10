// Create a function called shortcut to remove the lowercase vowels 
// (a, e, i, o, u ) in a given string.


//solution


function shortcut (string) {
    let arr = ["a", "e", "i", "o", "u"]
    return string.split('').filter(el=> !arr.includes(el)).join('')
}