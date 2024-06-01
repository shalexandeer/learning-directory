package com.example.bank;


public class BankApplication {
  public static void main(String[] args){
    System.out.println("Bank: " + BankAccount.getBankName());

    // Display interes rerate using static method from interface
    InterestBearingAccount.displayInterestRate();

    // Create a SavingsAccount instance 
    SavingsAccount savingsAccount = new SavingsAccount("SA12345", 1000.00 );
    SavingsAccount savingsAccount2 = new SavingsAccount("SHA2910", 2000.00);

    // deposit money
    savingsAccount.deposit(500.00);
    savingsAccount2.withdraw(1900.00);

    // withdraw money
    savingsAccount.withdraw(200.00);

    // add interest
    savingsAccount.addInterest();

    // Access account details
    System.out.println("Account Number: " + savingsAccount.getAccountNumber());
    System.out.println("Interest Rate: " + savingsAccount.getBalance());

    System.out.println("Access Account Number: " + savingsAccount2.getAccountNumber());
    System.out.println("Balance: " + savingsAccount2.getBalance());
  }
}
