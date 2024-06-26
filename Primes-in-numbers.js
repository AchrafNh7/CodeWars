// Given a positive number n > 1 find the prime factor decomposition of n. 
// The result will be a string with the following form :
//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


//solution




function primeFactors(n){
    const factors = {};
    let str = '';
    for (let factor = 2; factor <= n; ) {
      if (n % factor == 0) {
        factors[factor] = (factors[factor]) ? factors[factor] + 1 : 1;
        n /= factor;
        if (n % factor) {
          str += `(${factor}${(factors[factor] > 1) ? `**${factors[factor]}` : ''})`;
        }
      } else {
        factor++;
      }
    }
    return str;
  }