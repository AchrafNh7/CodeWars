// Remove all exclamation marks from the end of sentence.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"


//solution

function remove (string) { 
    let result = string;
   while (result[result.length - 1] === "!") {
     result = result.slice(0, -1);
   }
   return result;
 }