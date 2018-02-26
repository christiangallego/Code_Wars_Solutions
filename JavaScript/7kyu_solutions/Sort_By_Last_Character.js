// Sort array by last character

// Write a function sortMe (sort_me in Python) to sort a given array by last character of the element.

// Element can be an integer or a string.

// Example:
// sortMe(['acvd','bcc']) => ['bcc','acvd']
// As the last characters of strings are 'd' and 'c'. As, 'c' comes before 'd', sorting by last character will give ['bcc', 'acvd']

// If two elements don't differ in the last character, that then they should be sorted by the order they come in the array.

function last(x)
{
  var xArray = x.split(' ');  
  function lastSorted(a, b) 
  {
    if (a.charCodeAt() > 0 || b.charCodeAt() > 0)     
      return a[a.length - 1].charCodeAt() - b[b.length -1].charCodeAt();
     else 
      return '';
  }
  return xArray.sort(lastSorted);  
}
