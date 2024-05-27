import java.util.Scanner;
class Main {
  public static void main(String[] args){
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter username");

    String name = myObj.nextLine();

    // numerical input
    int age = myObj.nextInt();
    double salary = myObj.nextDouble();

    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);
  }
}


