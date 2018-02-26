// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

public static class Kata
{
  public static int ArrayPlusArray(int[] arr1, int[] arr2)
  {
    int sumOne = 0;
    int sumTwo = 0;
    for(var i = 0; i < arr1.Length; i++) 
    {
     sumOne = sumOne + arr1[i];     
    }
    for(var j = 0; j < arr2.Length; j++) 
    {
     sumTwo = sumTwo + arr2[j]; 
    }
    return sumOne + sumTwo;
  }
}