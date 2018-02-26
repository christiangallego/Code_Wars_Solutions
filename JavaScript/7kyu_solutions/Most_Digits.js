// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


function findLongest(array) 
{
    var arrayLength = array.map(function(i) 
    {
      return i.toString().length;
    });
    
    arrayLength.sort();
    var longestLength = arrayLength[arrayLength.length -1];
    
    for (var i = 0; i < array.length; i++) 
    {
      if (array[i].toString().length === longestLength) 
      {
        return array[i]
        break;
      }
    }
  }