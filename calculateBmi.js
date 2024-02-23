// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


// My Solution



function bmi(weight, height) {
    let str 
    let bodyMass = weight/(height*height)
    if(bodyMass <= 18.5){
      str = "Underweight"
    }else if(bodyMass <= 25){
      str = "Normal"
    }else if(bodyMass <= 30.0){
      str = "Overweight"
    }else{
      str = "Obese"
    }
    return str
  }