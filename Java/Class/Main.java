// // to create a class
// public class Main {
//   // String fname = "John";
//   // String lname = "Doe";
//   // int age = 24;
  
//   // public static void main(String[] args){
//   //   Main myObj = new Main();
//   //   System.out.println("Name: " + myObj.fname + " " + myObj.lname);
//   //   System.out.println("Age: " + myObj.age);
//   // }

//   // static void myMethod(){
//   //   System.out.println("Hello World");
//   // }

//   // public static void main(String[] args){
//   //   myMethod();
//   // }

//   // static vs public, static can be accessed directly without creating an objects. while public we have to create  objects to access it attributes
  
//   // static method
//   // static void myStaticMethod(){
//   //   System.out.println("Static methods can bed called without creating an objects");
//   // }

//   // // public method
//   // public void myPublicMethod(){
//   //   System.out.println("Public methods can bed called without creating an objects");
//   // }

//   // // create a fullThorttle() method
//   // public void fullThorttle(){
//   //   System.out.println("The car is going as fast as it can");
//   // }

//   // // create a speed() metod and add a parameter
//   // public void speed(int maxSpeed){
//   //   System.out.println("max speed is " + maxSpeed);
//   // }

//   // Main method
//   // public static void main(String[] args){
//   //   myStaticMethod();

//   //   Main myObj = new Main(); // create an object of main
//   //   myObj.myPublicMethod();

//   //   Main myCar = new Main(); // create a car
//   //   myCar.fullThorttle();
//   //   myCar.speed(200);
//   // }

//   // int modelYear;
//   // String modelName; //
  
//   // public Main(int year, String name){
//   //   modelYear = year;
//   //   modelName = name;
//   // }

//   // public static void main(String[] args){
//   //   Main myCar = new Main(1969, "Mustang");
//   //   System.out.println(myCar.modelYear + " " + myCar.modelName);
//   // }

//   // final int x = 10;
//   // final double PI = 3.14;

//   // public static void main(String[] args){
//   //   Main myObj = new Main();
//   //   myObj.x = 50;
//   //   myObj.PI = 25;
//   //   System.out.println(myObj.x);
//   // }

//   // // static method
//   // static void myStaticMethod(){
//   //   System.out.println("Static methods can be called without creating objects");
//   // }

//   // // public method
//   // public void myPublicMethod(){
//   //   System.out.println("Public methods can be called without creating objects");
//   // };

//   // // Main method
//   // public static void main(String[] args){
//   //   myStaticMethod(); //call the static method
//   //   // myPublicMethod(); //call the public method

//   //   Main myObj = new Main();
//   //   myObj.myPublicMethod();
//   // }

//   // ABSTRACT class
// }


abstract class Main {
  public String fname = "John";
  public int age = 24;
  public abstract void study();
}

// subclass (inherit from Main)

class Student extends Main{
  public int graduationYear = 2018;
  public void study(){
    System.out.println("Studying all day long");
  }
}