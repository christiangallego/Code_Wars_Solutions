// Given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(string)
{
  //    ES6
  //    let answer = string.split(" ").sort((a, b) => a.length - b.length)[0];
  //    return answer.length;
 
   let answer = string.split(" ").sort(function(a, b) 
   {
   return a.length - b.length;
   });
   return answer.shift().length;
 }