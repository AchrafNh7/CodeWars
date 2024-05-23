// The first input array is the key to the correct answers to an exam, like 
// ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for 
// this array of answers, giving +4 for each correct answer, -1 for each 
// incorrect answer, and +0 for each blank answer, represented as an empty 
// string (in C the space character is used).
// If the score < 0, return 0



//solution


function checkExam(array1, array2) {
    let note = 0
    for(let i = 0; i < array1.length; i++){
      if(array1[i] === array2[i]){
        note += 4
      }else if(array1[i] === '' || array2[i] === ''){
        note += 0
      }else{
        note -= 1
      }
    }
     return note > 0 ? note : 0
   }