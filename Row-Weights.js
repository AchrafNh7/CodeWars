// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third 
// goes into team 1, and so on.
// Task
// Given an array of positive integers (the weights of the people), return a 
// new array/tuple of two integers, where the first one is the total weight of 
// team 1, and the second one is the total weight of team 2.



//solution



function rowWeights(array){
    if(array.length === 1){ 
      array.push(0)
    return array
    }
    if(array.length === 2){ return array }
    let firstTeam = array[0]
    let secondTeam = array[1]
    for(let i = 2; i < array.length; i++){
      if(i % 2 === 0){
        firstTeam += array[i]
      }else{
        secondTeam += array[i]
      }
    }
    return [firstTeam,secondTeam]
  }