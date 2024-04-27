// Build a pyramid-shaped tower, as an array/list of strings, given a positive 
// integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]


//solution



function towerBuilder(nFloors) {
    let arr = []
    let str
    let space
    for(let i = 1; i <= nFloors; i++){
      space = ' '.repeat(nFloors - i)
      str = '*'.repeat(2 * i - 1)
      arr.push(`${space}${str}${space}`)
    }
    return arr
  }