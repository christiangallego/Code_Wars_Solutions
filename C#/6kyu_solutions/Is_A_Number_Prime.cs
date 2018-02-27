// Is Prime
// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// Kata.IsPrime(5) => true
// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).


public static class Kata
{
  public static bool IsPrime(int n)
  {
  bool answer = true;
  
  if(n <= 1) 
    answer = false;
  else if (n == 2)
    answer = true;
  else if (n % 2 == 0)
    answer = false;
  for(int i = 3; i * i <= n; i+=2) 
  {
    if(n % i == 0) 
      answer = false;
  }
  return answer;
  }
}