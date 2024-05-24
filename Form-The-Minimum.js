// Given a list of digits, return the smallest number that could be formed from 
// these digits, using the digits only once (ignore duplicates).



//solution



function minValue(values){
  let arr = []
  for(let i = 0; i < values.length; i++){
    if(arr.indexOf(values[i]) === -1){
      arr.push(values[i])
      
    }
  }
  return Number(arr.sort((a,b)=> a-b).join(''))
}