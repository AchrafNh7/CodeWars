// Write a function that takes an array of numbers (integers for the tests) and 
// a target number. It should find two different items in the array that, when 
// added together, give the target value. The indices of these items should then 
// be returned in a tuple / list (depending on your language) like so: 
// (index1, index2).



//solution



function twoSum(numbers, target) {
    for(let i = 1; i < numbers.length; i++){
      for(let j = 0; j < i; j++){
        if(numbers[i] + numbers[j] === target){
          return [i,j]  
      }
    }
      }
  }