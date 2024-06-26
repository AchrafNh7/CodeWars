// A stream of data is received and needs to be reversed.
// Each segment is 8 bits long, meaning the order of these segments needs 
// to be reversed, for example:
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.


// solution


function dataReverse(data) {
    if(data.length === 0) return []
  return   data.join('')
           .match(/\d{8}/g)
           .reverse()
           .join('')
           .split('')
           .map(el=> Number(el))
}