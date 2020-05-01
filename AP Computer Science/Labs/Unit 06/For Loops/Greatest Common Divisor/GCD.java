// � A+ Computer Science - www.apluscompsci.com
// Name - Sebastian Nunez
// Date - 11/02/18
// Class - 10th
// Lab - Greatest Common Divisor

import static java.lang.System.*;

public class GCD
{
    private int one, two;

    public GCD() {
        one = two = 0;
    }

    public GCD(int numOne, int numTwo) {
        setNums(numOne, numTwo);
    }

    public void setNums(int numOne, int numTwo) {
        one = numOne;
        two = numTwo;
    }

    public long getGCD() {
        long gcd = 0;

        for (int i = two; i >= one; i--) {
            if (one % i == 0 && two % i == 0)
                gcd = i;
        }
        return gcd;
    }

    public String toString() {
        return "the gcd of " + one + " and " + two + " is " + getGCD() + "\n";
    }
}
