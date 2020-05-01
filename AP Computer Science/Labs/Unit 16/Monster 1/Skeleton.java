// (c) A+ Computer Science
// www.apluscompsci.com
// Name -

public class Skeleton implements Monster
{
    //add instance variables
    String name;
    int size;

    //add a constructor
    public Skeleton() {
        name = "";
        size = 0;
    }

    public Skeleton(String n, int s) {
        name = n;
        size = s;
    }

    //add code to implement the Monster interface
    public int getHowBig() {
        return size;
    }

    public String getName() {
        return name;
    }

    public boolean isBigger(Monster other) {
        return size > other.getHowBig();
    }

    public boolean isSmaller(Monster other) {
        return size < other.getHowBig();
    }

    public boolean namesTheSame(Monster other) {
        return name.equals(other.getName());
    }

    //add a toString
    public String toString() {
        return name + " " + size;
    }
}
