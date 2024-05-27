class Animal {
  public void animalSound(){
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound(){
    System.out.println("The pig makes a sound");
  }
} 

class Dog extends Animal{
  public void animalSound(){
    System.out.println("The dog makes a sound");
  }
}


class Main{
  public static void main(String[] args){
    Animal myAnimal = new Animal();
    Animal myPig = new Pig();
    Animal myDog = new Dog();
    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}