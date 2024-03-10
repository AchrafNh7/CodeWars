// In this kata you are required to, given a string, replace every 
// letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.


//solution


function alphabetPosition(text) {
 return [...text.replace(/[^a-z]/gi,'').toLowerCase()].map(e=>e.charCodeAt()-96)
                                                      .join(' ')
}