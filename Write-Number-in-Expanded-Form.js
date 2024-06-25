// You will be given a number and you will need to return it as a 
// string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should retu


//solution

function expandedForm(num) {
    let numLength = String(num).length
   return String(String(num).split("")
                            .map((el,i)=> el + '0'.repeat(numLength-(i+1)))
                            .filter(e=> Number(e) > 0).join(' + '))
  }