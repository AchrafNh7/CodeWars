// Implement String#digit? (in Java StringUtils.isDigit(String)), which 
// should return true if given object is a digit (0-9), false otherwise.


//solution

String.prototype.digit = function(d) {
    return /^[0-9]$/g.test(this)
};