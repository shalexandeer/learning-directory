public class Main {
  public static void main(String[] args){
    Person myObj = new Person();
    myObj.setName("John");
    System.out.println(myObj.getName());
    
    
    Car myCar = new Car("Toyota", "Camry", 1000);

    myCar.displayInfo();

    myCar.setYear(2000);
    myCar.displayInfo();
  }
}