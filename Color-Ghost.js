// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or 
// "yellow" or "purple" or "red" when instantiated


//solution

class Ghost {
    constructor() {
      this.colors = ['white', 'yellow', 'purple', 'red']
    }
  
    get color() {
      const randomPosition = Math.floor(Math.random() * this.colors.length)
      return this.colors[randomPosition]
    }
}