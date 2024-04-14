// Write a function that takes an array of strings as an argument and returns a 
// sorted array containing the same strings, ordered from shortest to longest.



//solution



const sortByLength = array =>array.sort((a,b)=> a.length - b.length)