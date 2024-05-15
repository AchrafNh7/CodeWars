// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the 
// alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears 
// earliest in the original string.
// All letters will be lowercase and all inputs will be valid.



//solution


function high(x){
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                 'n','o','p','q','r','s','t','u','v','w','x','y','z']
    let nums = x.split(' ')
              .map((el,i)=> 
                   el.length > 1 ? 
                   el.split('').map(e=> alpha.indexOf(e) + 1)
                   .reduce((a,b)=> a + b ,0) : 
                   alpha.indexOf(el) + 1)
    let arr = x.split(' ')
    return arr[nums.indexOf(Math.max(...nums))]
    }