// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.


//solution



function replace(s){
    return s.replace(/[aeiuoAEIOU]/g, '!')
  }