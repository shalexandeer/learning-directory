class Vehicle {
  protected String brand = "Ford"; //vehicle attribute
  public void honk(){  // vehicle method
    System.out.println("Tuut, Tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang"; //car attribute
  public static void main(String[] args){
    // create an object car
    Car myCar = new Car();

    // call the honk() method 
    myCar.honk();

    System.out.println(myCar.brand +" " + myCar.modelName);
  }
}