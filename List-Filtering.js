// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.


//solution


const filter_list = l => l.filter(num => Number.isInteger(num))

function filter_list(l) {
    let arr = []
    for(let num of l){
      if(Number.isInteger(num)){
        arr.push(num)
    }
    }
      return arr
  }