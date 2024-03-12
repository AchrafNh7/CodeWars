// Take 2 strings s1 and s2 including only letters from a to z. Return a new 
// sorted string, the longest possible, containing distinct letters - each 
// taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//solution

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


function longest(s1, s2) {
    let s = (s1 + s2).split('').sort()
    let x = []
    for(let i = 0; i<s.length; i++){
      if(!x.includes(s[i])) {
     x.push(s[i])
      }
    }
  return x.join('')
}