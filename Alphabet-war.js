// Write a function that accepts fight string consists of only small letters 
// and return who wins the fight. When the left side wins return Left 
// side wins!, when the right side wins return Right side wins!, 
// in other case return Let's fight again!.
// The left side letters and their power:
//  w = - 4, p = - 3, b = - 2, s = - 1
// The right side letters and their power:
//  m = - 4, q = - 3, d = - 2, z = - 1
// The other letters don't have power and are only victims.


//solution

function alphabetWar(fight){
    let rightSide = ['z','d','q','m']
    let leftSide = ['s','b','p','w']
    if(fight.length === 1){
      if(leftSide.includes(...fight)){
        return 'Left side wins!'
      }else{
        return 'Right side wins!'
      }
    }
    let left = fight.split('').filter(el=> leftSide.includes(el))
               .map(e=>leftSide.indexOf(e) + 1).reduce((acc,cur)=> acc+cur,0)
    let right = fight.split('').filter(el=> rightSide.includes(el))
                .map(e=>rightSide.indexOf(e) + 1).reduce((acc,cur)=> acc+cur,0)
   
    return left > right ? 'Left side wins!' 
                        : right > left ? 'Right side wins!'
                                       : "Let's fight again!"
  }