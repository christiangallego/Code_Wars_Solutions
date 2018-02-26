// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) 
{
  let bmiCalculate = weight / (height*height);   
  if (bmiCalculate <= 18.5) 
    return "Underweight";
  if (bmiCalculate > 18.5 && bmiCalculate <= 25.0) 
      return "Normal"; 
  if (bmiCalculate > 25.0 && bmiCalculate <= 30.0) 
      return "Overweight";
  if (bmiCalculate > 30) 
    return "Obese";
  }
  