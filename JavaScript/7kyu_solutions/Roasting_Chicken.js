// Oliver likes to roast a chicken on a Sunday Afternoon.

// He knows that in order to get it just how he wants it, he should roast it for 20 minutes for every 450g of uncooked weight plus an additional 20 minutes

// You are given a weight of a uncooked chicken in kg, return for how long it needs to be roasted - in hours and minutes, rounding up to the nearest five minutes.

// If the chicken is to be roasted for more than 2 hours then write hrs, otherwise write hr.

// If the chicken is to be roasted for less than an hour, only give the number of minutes.

// If the uncooked weight is 0, return "There is no chicken!"

// An example time is 2 hrs 45 mins

function cookingTime(weight)
{  
let calculation = weight * 1000 / 450;
let cookingTime =  Math.ceil((calculation * 20 + 20) / 5) * 5;

if( weight <= 0 ) 
  return "There is no chicken!";

if( cookingTime < 60 ) 
  return cookingTime + " mins";

if ( cookingTime === 60 ) 
  return cookingTime / 60 + " hr";

if( cookingTime >= 60 && cookingTime < 120 ) 
  return Math.floor(cookingTime / 60) + " hr " + (cookingTime % 60) + " mins";

else if ( cookingTime > 120 && cookingTime % 60 !== 0 ) 
  return Math.floor(cookingTime / 60) + " hrs " + (cookingTime % 60) + " mins";

else 
  return cookingTime / 60 + " hrs";
}

