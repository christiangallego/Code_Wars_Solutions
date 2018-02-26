// In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

// Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. 

// That should get us close to the answer. I will leave the rest to you.

// For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.


function solve(a, b) 
{
  var arrA = a.split('');
  var arrB = b.split('');
    if (a.length <= b.length)     
      return 0;
    else {
      for (var i = arrA.length; i >= 0; i--) 
      {
        for (var j = arrB.length; j >= 0; j--) 
        {
          if (arrA[i] == arrB[j]) 
          {
            arrA.splice(i, 1);
            arrB.splice(j, 1);
            break;
          }
        }
      }
    if (arrB.length > 0) 
      return 0;
    else 
      return arrA.length;
    }
  }