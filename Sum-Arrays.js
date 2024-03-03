// Write a function that takes an array of numbers and returns the sum of the 
// numbers. The numbers can be negative or non-integer. If the array does not 
// contain any numbers then you should return 0.

// Assumptions

// You can assume that you are only given numbers.You cannot assume the size of 
// the array.You can assume that you do get an array and if the array is empty, 
// return 0.


//solution


const sum = numbers => numbers.length ? numbers.reduce((i,n)=>i+n) : 0