// … a man was given directions to go from one point to another. The directions 
// were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are 
// opposite, "WEST" and "EAST" too.
// Going to one direction and coming back the opposite direction right away is a 
// needless effort. Since this is the wild west, with dreadful weather and not 
// much water, it's important to save yourself some energy, otherwise you might 
// die of thirst!
// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following 
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// You can immediately see that going "NORTH" and immediately "SOUTH" is not 
// reasonable, better stay to the same place! So the task is to give to the man 
// a simplified version of the plan. A better plan in this case is simply:
// ["WEST"]
// Task
// Write a function dirReduc which will take an array of strings and returns an 
// array of strings with the needless directions removed (W<->E or S<->N side by 
// side).


//solution


function dirReduc(arr){
    let opposites = {"NORTH":"SOUTH", "SOUTH":"NORTH", "WEST":"EAST", "EAST":"WEST"}
    let newArr = arr.reduce((acc,cur)=>{
      if(opposites[acc.slice(-1)] === cur){
        acc.pop(cur)
      }else{
        acc.push(cur)
      }
      return acc
    },[])
    return newArr
   }