// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that 
// checks whether the two arrays have the "same" elements, with the same 
// multiplicities (the multiplicity of a member is the number of times it appears). 
// "Same" means, here, that the elements in b are the elements in a squared, 
// regardless of the order.

// Remarks
// If a or b are nil (or null or None, depending on the language), the problem 
// doesn't make sense so return false.


//solution 



function comp(array1, array2) {
    if (array1 === null || array2 === null) {
      return false;
    }
    if (array1.length === 0 && array2.length === 0) {
      return true;
    }
    var array1Squared = array1.map(x => x * x).sort((a, b) => a - b)
    var array2Sorted = array2.sort((a, b)=> a - b)
    return JSON.stringify(array1Squared) === JSON.stringify(array2Sorted);
}