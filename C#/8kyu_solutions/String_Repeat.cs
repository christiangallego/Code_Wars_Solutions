// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

namespace Solution
{
  public static class Program
  {
    public static string repeatStr(int n, string s)
    {
      var answer = "";
      for(var i = 0; i < n; i++) 
       {
        answer += s;
       }
      return answer;
    }
  }
}