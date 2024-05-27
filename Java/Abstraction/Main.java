
abstract class Animal {
  public abstract void animalSound();
  public void sleep(){
    System.out.println("zzz");
  }
}

class Pig extends Animal{
  public void animalSound(){
    // the body of animalSound() is provided here
    System.out.println("the pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args){
    Pig myPig = new Pig(); // create a pig object
    myPig.animalSound();
    myPig.sleep();  
  }   
}
