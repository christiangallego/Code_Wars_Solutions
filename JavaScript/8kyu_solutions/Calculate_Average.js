// Write function avg which calculates average of numbers in given list.

function find_average(array) 
{
  var total = 0;
    for(i = 0; i < array.length; i++) 
    {
      var total = total + array[i];
      var length = array.length;
    } 
  return total / length;
}