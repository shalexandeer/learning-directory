package com.example.bank;

public interface InterestBearingAccount {
  // constant
  double interestRate = 0.05;

  // abstract method
  void addInterest();

  // default method
  default double calculateInterest(double balance){
    return balance * interestRate;
  }

  // static method
  static void displayInterestRate(){
    System.out.println("Current interest rate: " + (interestRate * 100) + "%");
  }
}