// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times


//solution


function findOdd(A) {
    let x = {}
    for (let i=0; i < A.length; i++){
      if(x[A[i]] === undefined){
        x[A[i]] = 1
      }else{
        x[A[i]] += 1
      }
    }
   for(let [key, value] of Object.entries(x)){
     if(value % 2 !== 0){
       return Number(key)
     }
   }
}  