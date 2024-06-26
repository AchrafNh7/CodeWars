// Write a function, persistence, that takes in a positive parameter num and 
// returns its multiplicative persistence, which is the number of times you must 
// multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)



//solution



function persistence(num) {
    let size = String(num).length
    if(size === 1) return 0
   let result = num 
   let count = 0
   while(size > 1){
    result = String(result).split('')
                      .map(e=> Number(e))
                      .reduce((acc, cur) => acc * cur ,1)
   size = String(result).length
     count++
   }
   return count
 }