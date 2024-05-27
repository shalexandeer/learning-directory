

interface Animal {
  public void animalSound();
  public void sleep();
}

class Pig implements Animal {
  public void animalSound(){
    System.out.println("The pig says: wee wee");
  }
  public void sleep(){
    System.out.println("zzz");
  }
}

class Main{
  public static void main(String[] args){
    Pig myPig = new Pig();
    myPig.animalSound();
    myPig.sleep();
  }
}

interface FirstInterface {
  public void myMethod();
}

interface SecondInterface {
  public void myOtherMethod();
}

class DemoClass implements FirstInterface, SecondInterface{
  public void myMethod(){
    System.out.println("Some text");
  }
  public void myOtherMethod(){
    System.out.println("Some other text...");
  }
}

class MainSecond {
  public static void main(String[] args){
    DemoClass myObj = new DemoClass();
    myObj.myMethod();
    myObj.myOtherMethod();
  }
}


