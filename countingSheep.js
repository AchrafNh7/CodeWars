// Consider an array/list of sheep where some sheep may be missing 
// from their place. We need a function that counts the number 
// of sheep present in the array (true means present).

// My solution

function countSheeps(sheep) {
    let sum = 0
    for(let i=0; i<sheep.length; i++){
      if(sheep[i]){
        sum +=1
      }else{
        sum
      }
    }
    return sum
  }
