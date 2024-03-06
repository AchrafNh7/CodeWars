// Complete the function that accepts a string parameter, and reverses each 
// word in the string. All spaces in the string should be retained.


//solution

function reverseWords(str) {
    let arr = str.split(' ')
    let reversedArr =[]
    for(let i=0; i<arr.length; i++){
      reversedArr.push(arr[i].split('').reverse().join(''))
    }
    return reversedArr.join(' ')
}