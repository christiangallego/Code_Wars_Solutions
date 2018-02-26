// Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'

function sevenAte9(str) 
{
  for (var i = 0; i < str.length; i++) 
  {
     if(str[i] == 9 && str[i+1] == 7 && str[i-1] == 7)     
      str = str.slice(0, i)  + str.slice(i + 1);       
  }
  return str;
}