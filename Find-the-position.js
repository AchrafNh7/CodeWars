// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"


//solution

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}