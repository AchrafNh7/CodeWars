//Given a string of digits, you should replace any digit below 5 with '0' 
//and any digit 5 and above with '1'. Return the resulting string.


//My Solution


function fakeBin(x){
    let arr= x.split('')
    let newArr = []
    for(let i=0; i<arr.length; i++){
      if(arr[i]<5){
        newArr.push('0')
      }else{
        newArr.push('1')
      }
    }
      return newArr.join('')
}

// Or...

const fakeBin = x =>x.split('').map(num => num < 5 ? '0' : '1').join('')

