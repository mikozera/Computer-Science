// (c) A+ Computer Science
// www.apluscompsci.com
// Name - Sebastian Nunez

public class ArrayOfPrimes
{
  // instance variables and constructors could be present, but are not necessary

  // getPrimeList(int numPrimes) will return an array
  // containing the first numPrimes primes starting at 2
  public static int[] getPrimeList(int numPrimes) {
    return getPrimeList(numPrimes, 2);  // just call a method here
  }

  // getPrimeList(int numPrimes, int primeStart) will return an array
  // containing the first numPrimes primes starting at primeStart
  public static int[] getPrimeList(int numPrimes, int primeStart) {
    int[] primes = new int[numPrimes];
    // you must call isPrime
    int index = 0;
    int currentNum = primeStart;
    int primeCount = 0;

    while (primeCount < numPrimes) {
      if (isPrime(currentNum)) {
        primes[index] = currentNum;
        index++;
        primeCount++;
      }
      currentNum++;
    }
    return primes;
  }

  // isPrime will return true if num is prime
  // a prime number is any number ony divisible by 1 and itself
  private static boolean isPrime(int num) {
    for (int i = 2; i < num; i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
}
