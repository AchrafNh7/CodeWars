// Complete the function/method so that it returns the url with anything after 
// the anchor (#) removed.


//soution



function removeUrlAnchor(url){
    let str = url.split('#')
    return str[0]
  }