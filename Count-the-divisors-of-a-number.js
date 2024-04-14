// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.



// solution



const getDivisorsCnt = (n) =>{
    let divisors = 0
    if(n % Math.sqrt(n) === 0){divisors += 1}
    for(let i =0; i < Math.sqrt(n); i++){
    if(n % i === 0){
      divisors += 2
    }
  }return divisors
}