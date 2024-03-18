// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0. Your function 
// only needs to return the result, what is shown between parentheses in 
// the example below is how you reach that result and it's not part of it, 
// see the sample tests


//solution


var summation = function (num) {
    let valueAbs = Math.abs(1-num) + 1
    let arr = []
    for (let i = 1; i <= valueAbs; i++){
     arr.push(i)
    }
      return arr.reduce((a,b)=>a+b)
   }

   const summation = n => n * (n + 1) / 2;