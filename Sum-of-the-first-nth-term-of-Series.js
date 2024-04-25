// Your task is to write a function which returns the n-th term of the following 
// series, which is the sum of the first n terms of the sequence (n is the input 
// parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + …
// You will need to figure out the rule of the series to complete this.
// Rules
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return "0.00".
// You will only be given Natural Numbers as arguments.
// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


//soution

function SeriesSum(n) {
    if(n === 0){return '0.00'}
    let devider = 1
    let result = 0
    let count = 0
    while( count < n){
      result += (1/ devider)
      devider += 3
      count++
    }
    return result.toFixed(2)
  }