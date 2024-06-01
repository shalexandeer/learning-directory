package com.example.bank;

public class SavingsAccount extends BankAccount implements InterestBearingAccount {
  // constructor
  public SavingsAccount(String accountNumber, double initialBalance){
    super(accountNumber, initialBalance);
  }

  // implement deposit method
  @Override
  public void deposit(double amount){
    balance += amount;
    System.out.println("Deposited: " + amount + ", New Balance: " + balance);
  }

  // implement addInterest method
  @Override
  public void addInterest(){
    double interest = calculateInterest(balance);
    balance += interest;
    System.out.println("Interest added: " + interest + ", New Balance: " + balance);
  }
}
