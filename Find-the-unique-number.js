// There is an array with some numbers. All numbers are equal except for one. 
// Try to find it!



//soution



const findUniq = arr =>{ 
    arr.sort((a,b)=>a-b)
   for(let i = 0; i < arr.length; i++){
     if(arr[i] == arr[i+1]){
       return arr[arr.length - 1]
     }else{
       return arr[i]
     }
   }
  }


  function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }