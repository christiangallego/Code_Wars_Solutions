// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;
        string lower = str.ToLower();
        for (int i = 0; i < lower.Length; i++) 
        {
          if(lower[i] == 'a' || lower[i] == 'e' || lower[i] == 'i' || lower[i] == 'o' || lower[i] == 'u')  
            vowelCount ++;            
        }                   
        return vowelCount;
    }
}