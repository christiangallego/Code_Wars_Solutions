// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) 
{
    var letterX = "x";
    var letterO = "o";
    var o = 0;
    var x = 0;
    
      for(i = 0; i < str.length; i++) 
      {
        if(str[i].toLowerCase() === letterO)         
          o++;
        else if(str[i].toLowerCase() === letterX) 
          x++;
      } 
}

// test case
var str = "xxxooo";      
if(o === x)       
   return true;
 else 
   return false;
      
XO(str);