// Write a function called that takes a string of parentheses, and determines if
// the order of the parentheses is valid. The function should return true if the
// string is valid, and false if it's invalid.

// Examples "()"              =>  true ")(()))"          =>  false "("
// =>  false "(())((()())())"  =>  true Constraints 0 <= input.length <= 100

// You may assume that the input string will only contain opening and closing
// parenthesis and will not be an empty string.

function validParentheses(parens)
{
  var arr = [];  
    for (let  i = 0; i < parens.length; i++) 
    {
      if( parens[i] == '(' ) 
        arr.push( '(' );      
      else if( arr.pop() != '(' ) 
        return false;      
    }
      return arr.length == 0;
  }
     