
enum Level{
  LOW, 
  MEDIUM, 
  HIGH, 
}
public class Main{
  
  public static void main(String[] args){
    // Level myVar = Level.MEDIUM;

    for (Level myVar : Level.values()) {
      System.out.println(myVar);
    }
    
    // switch (myVar) {
    //   case LOW:
    //     System.out.println("Low level");
    //     break;
    //   case MEDIUM:
    //     System.out.println("Medium level");
    //     break;
    //   case HIGH:  
    //     System.out.println("High level");
    //     break;  
    // }
  }
}



