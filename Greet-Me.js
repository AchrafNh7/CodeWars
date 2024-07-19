// Write a method that takes one argument as name and then greets that name, 
// capitalized and ends with an exclamation point.
// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


//solution

const greet = function(name) {
    let newName = name.split('').map((el,i)=> i==0 ? el.toUpperCase() : el.toLowerCase()).join('')
    return `Hello ${newName}!`
};