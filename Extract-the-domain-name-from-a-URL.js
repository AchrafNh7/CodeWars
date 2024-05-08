// Write a function that when given a URL as a string, parses out just the 
// domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = "cnet"



//solution


function domainName(url){
    let splitingByDot = url.split('.')
    if(splitingByDot[0].includes('//') && splitingByDot[0].includes('www')){
      return splitingByDot[1]
    }else if(splitingByDot[0] === 'www'){
      return splitingByDot[1]
    }else if(splitingByDot[0].includes('//')){
     return splitingByDot[0].split('//')[1]
    }else{
      return splitingByDot[0]
    }
    }