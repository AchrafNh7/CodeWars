// Given a sequence of numbers, find the largest pair sum in the sequence.
// For example
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23


//solution


function largestPairSum (numbers) {
    let arr = []
    for(let i = 0; i < numbers.length; i++){
      for(let j = 1; j < numbers.length; j++){
        if(i !== j){
          arr.push(numbers[i]+numbers[j])
        }
      }
    }
    return Math.max(...arr)
}