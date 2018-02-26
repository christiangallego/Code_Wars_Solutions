// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Implement the method stray which accepts such array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples:

// [1, 1, 2] => 2

// [17, 17, 3, 17, 17, 17, 17] => 3


function stray(numbers) 
{
  var startNumber = numbers[0];
  var count = 0;
  var answer;
  for (var i = 1; i < numbers.length; i++) 
  {
    if (numbers[i] === startNumber)     
      continue;
    else 
    {
      count++;
      answer = numbers[i];
    }
  }
  if (count > 1)   
    return startNumber;
  else 
    return answer;  
}