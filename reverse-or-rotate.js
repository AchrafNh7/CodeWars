// The input is a string str of digits. Cut the string into chunks (a chunk here 
// is a substring of the initial string) of size sz (ignore the last chunk if 
// its size is less than sz).
// If the sum of a chunk's digits is divisible by 2, reverse that chunk; 
// otherwise rotate it to the left by one position. Put together these modified 
// chunks and return the result as a string.
// If sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of 
// size sz hence return "". Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"



//solution



function revrot(str, sz) {
    let result="";
    if(str.length<sz||str.length == 0||sz == 0){
        return result;
    }
    let cubeNum = Math.floor(str.length/sz);
    for(let i = 0 ;i<cubeNum;i++){
        let cube = str.slice(i*sz,(i+1)*sz);
        let sum = 0;
      for(let j = 0;j<cube.length;j++){
            sum = parseInt(cube.charAt(j)) +parseInt(sum);
        }
        if(sum%2== 0){
            for(let j =cube.length;j>=0;j--){
            result += cube.charAt(j)+'';
            }
        }else{
            let firstCode =  cube.split("").splice(0,1).toString();
                result += cube.split("").splice(1,cube.length).join("") + firstCode;
        }
    }
    return result
  
}