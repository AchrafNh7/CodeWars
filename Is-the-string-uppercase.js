// Create a method to see whether the string is ALL CAPS


//solution


String.prototype.isUpperCase = function() {
    return this.split('')
               .filter(el=> el == el.toUpperCase())
               .length === this.length
}