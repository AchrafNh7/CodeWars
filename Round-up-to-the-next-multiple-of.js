// Given an integer as input, can you round it to the next (meaning, "greater 
// than or equal") multiple of 5
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15



//solution


function roundToNext5(n){
    for(let i = n; i < (n + 5); i++){
     if( i % 5 === 0){
       return i
     }
    }
  }