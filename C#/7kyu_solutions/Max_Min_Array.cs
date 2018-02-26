// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:
// Kata.Solve(new List<int> {15,11,10,7,12}) => new List<int> {15,7,12,10,11}
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.


//**Solved in Visual Studio as a Console Application**

List<int> numbers = new List<int>() {10,65,98,100,63,15,97 };
numbers.Sort();

//display sorted list
foreach(int i in numbers)
{
  Console.Write(i + " ");
}

List<int> output = new List<int>();

//copy list into array
int[] numCopy = new int[numbers.Count];
numbers.CopyTo(numCopy);
Array.Sort(numCopy);

//copies sorted array into another array
int[] numCopy2 = new int[numbers.Count];
numCopy.CopyTo(numCopy2, 0);
Array.Reverse(numCopy2);

//inserts values into list in max-min order
for (int i = 0, j = numbers.Count; i < j; i++, j--)
{
  if (numCopy[i] == numCopy2[i])            
    output.Add(numCopy[i]);               
  else if (numCopy[i] != numCopy2[i])
    {
    output.Add(numCopy2[i]);
    output.Add(numCopy[i]);
    }    
}

//displays output
foreach (int i in output)
{
Console.WriteLine(i);
}