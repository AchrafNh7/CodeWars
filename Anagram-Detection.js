// Complete the function to return true if the two arguments given are anagrams 
// of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"



//soution


const isAnagram = function(test, original) {
    let sortedTest = test.toLowerCase().split('').sort().join('')
    let sortedOriginal = original.toLowerCase().split('').sort().join('')
    return sortedTest == sortedOriginal
}