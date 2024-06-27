// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105



//solution

function noBoringZeros(n) {
  let str = String(n)
  let arr = str.split('')
  for(let i = str.length - 1; i > 0; i--){
     if(str[i] == '0'){
      arr[i] = ''
    }else{
      break;
    }

   }
   return Number(arr.join(''))
}