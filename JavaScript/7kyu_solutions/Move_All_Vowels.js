// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

function moveVowel(input) 
{
  // vowel array to compare function argument to
  var alphabet = ["a","e","i","o","u"];
  // taking argument from a string to an array of strings separated by commas
    var inputArray = input.split("");
    // array to store result of comparison
      var newArray = [];
      
        for(i = inputArray.length; i >=0; i--) 
        {
            for(j = 0; j < alphabet.length; j++) 
            {
              if (inputArray[i] === alphabet[j])               
                 newArray.push(inputArray.splice(i,1));             
            }
        }
  return inputArray.concat(newArray.reverse()).join("");
}