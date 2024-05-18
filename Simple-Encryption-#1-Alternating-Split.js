// Implement a pseudo-encryption algorithm which given a string S and an integer 
// N concatenates all the odd-indexed characters of S with all the even-indexed 
// characters of S, this process should be repeated N times.
// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption 
// function which reverses the process.
// If the string S is an empty value or the integer N is not positive, return 
// the first argument without changes.


//solution



function encrypt(text, n) {
    if(text === null || text === '' || n <= 0 ){
      return text
    }
     let encryptedText = text
    for(let i = 0; i < n; i++){
     let odds = encryptedText.split('').filter((e,i) => i % 2 !== 0).join('')
     let evens = encryptedText.split('').filter((e,i) => i % 2 == 0).join('')
     encryptedText = odds + evens
    }
     return encryptedText
   }
   
   function decrypt(encryptedText, n) {
        if(encryptedText === null || encryptedText === '' || n <= 0 ){
      return encryptedText
    }
    n--;
    let length = []
    let result = []
    let split = encryptedText.split('')
    for(let i = 1; i <= encryptedText.length; i++){
      if(i % 2 === 0 ){
          length.push(i)
        }
      }
      let odds = split.slice(length.length)
      let evens = split.slice(0, length.length)
      for(let i = 0; i < odds.length; i++){
        result.push(odds[i] , evens[i])
      }
       if(!n == 1){
       return result.join('')
     }else {
       return decrypt(result.join(''), n)
       }
    } 