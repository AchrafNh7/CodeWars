// Given an array of integers.

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor 
// negative.
// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
// you should return [10, -65].


//solution


function countPositivesSumNegatives(input) {
    let y = 0
    let x = 0
    if(input == null) return []
    if(!input.length) return []
    for (let i= 0; i<input.length; i++){
    if(input[i]>0){
      x += 1
    }else if( input[i]<0){
       y += input[i]
    }
  }
    return [x,y]
  }