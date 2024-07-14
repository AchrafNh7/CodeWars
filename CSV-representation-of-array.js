// Create a function that returns the CSV representation of a two-dimensional 
// numeric array.
// Example:
// input:                         ====>         output:      
//    [[ 0, 1, 2, 3, 4 ],                       '0,1,2,3,4\n'
//     [ 10,11,12,13,14 ],                      +'10,11,12,13,14\n'
//     [ 20,21,22,23,24 ],                      +'20,21,22,23,24\n'
//     [ 30,31,32,33,34 ]]                      +'30,31,32,33,34'



//solution

function toCsvText(array) {
    return array.map((el,i)=> i < array.length-1 ? el.join(",") + '\n' : el.join(','))
                .join("")
 }