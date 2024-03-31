// ROT13 is a simple letter substitution cipher that replaces a letter with 
// the letter 13 letters after it in the alphabet. ROT13 is an example of 
// the Caesar cipher.

// Create a function that takes a string and returns the string ciphered 
// with Rot13. If there are numbers or special characters included in 
// the string, they should be returned as they are. Only letters from 
// the latin/english alphabet should be shifted, like in the original Rot13 
// "implementation".



//solution


function rot13(message){
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
     const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
     let encoded = ''
     for (let i=0; i < message.length; i++) {
         if(input.includes(message[i])){
           const index = input.indexOf(message[i])
           encoded += output[index]
     }else{
       encoded += message[i]
     }
     }
 
     return encoded
 }