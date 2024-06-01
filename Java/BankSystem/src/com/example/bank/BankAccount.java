package com.example.bank;

public abstract class BankAccount {
  private static String bankName = "Global Bank";

  // instance variables
  private String accountNumber;
  protected double balance;

  // constructor
  public BankAccount(String accountNumber, double initialBalance){
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  // abstract method (to be implemented by subclasses)
  public abstract void deposit(double amount);

  // concrete method
  public void withdraw(double amount){
    if(amount > balance){
      System.out.println("Insufficient balance");
    }else{
      balance -= amount;
      System.out.println("Withdrawn: " + amount + ", New balance: " + balance);
    }
  }

  // static method
  public static String getBankName(){
    return bankName;
  }

  // getter for account number (public)
  public String getAccountNumber(){
    return accountNumber;
  }

  // getter for balance (protected)
  protected double getBalance(){
    return balance;
  }
}
