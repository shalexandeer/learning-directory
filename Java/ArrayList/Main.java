import java.util.ArrayList;
import java.util.Collections;


public class Main {
  public static void main(String[] args){
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");

    // for loop
    // for (int i = 0; i < cars.size(); i++){
    //   System.out.println(cars.get(i));
    // }

    // for each loop 

    Collections.sort(cars);
    for (String i : cars){
      System.out.println(i);
    }
  }
}
