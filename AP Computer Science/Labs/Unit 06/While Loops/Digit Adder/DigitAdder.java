// (c) A+ Computer Science
// www.apluscompsci.com
// Name - Sebastian Nunez

public class DigitAdder
{
  public static int sumDigits(int number) {
    int sum = 0;

    while (number > 0) {
      sum += number % 10;
      number /= 10;
    }

    return sum;
  }
}
