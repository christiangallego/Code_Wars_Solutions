// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) 
{
  var array = [];
  var cat1 = 15;
  var cat2 = 24;
  var dog1 = 15;
  var dog2 = 24;
  var human = 1;
  var human2 = 2;

if(humanYears == 1) 
  array.push(human, cat1, dog1);
if(humanYears == 2)   
  array.push(human2, cat2, dog2);
if(humanYears >= 3) 
{
for(var i = 2; i < humanYears; i++) 
{
human2 += 1;
cat2 += 4;
dog2 += 5;
}  
array.push(human2, cat2, dog2);
}
return array;
}