public class Car {
  private String make;
  private String model;
  private int year;

  public Car(String make, String model, int year){
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // getter methods
  public String getMake(){
    return make;
  }

  public String getModel(){
    return model;
  }

  public int getYear(){
    return year;
  }

  // setter methods
  public void setMake(String make){
    this.make = make;
  }

  public void setModel(String model){
    this.model = model;
  }

  public void setYear(int year){
    this.year = year;
  }
  
  public void displayInfo() {
    System.out.println("Car Make: " + make);
    System.out.println("Car Model: " + model);
    System.out.println("Car Year: " + year);
  }
}
