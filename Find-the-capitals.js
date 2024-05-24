// Write a function that takes a single non-empty string of only lowercase and 
// uppercase ascii letters (word) as its argument, and returns an ordered list 
// containing the indices of all capital (uppercase) letters in the string.



//solution



const capitals = word => {
	return word.replace(/[^A-Z]/g,'')
             .split('')
             .map(el=>word.indexOf(el))
};