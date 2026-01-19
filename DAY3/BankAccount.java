//Write a program for bankaccount to know the balance after depositing and withdrawing the amount 
// and also having the loan account facilitiy to calculate the emi and monthly emi's will be
//paid by customer using either by card or cash
import java.util.Scanner;
public class BankAccount {
    String name;
    int accountNo;
    private double balance;
    public void deposit(int amount)
    {
        if(amount>0){
            balance += amount;
        }
    }
     public void withdraw(int amount)
    {
        if(amount<=balance){
            balance -= amount;
        }
        else{
            System.out.println("not enough balance in your account.");
        }
    }
    public void displayinfo(String name,int accountNo)
    {
        // this.name =name;
        // this.accountNo =accountNo;
        System.out.println("the balance in account number "+accountNo+" with name "+name+" is :");
    }
    public double getbalance(){
        return balance;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAccount a = new BankAccount();
        System.out.println("enter your name: ");
        a.name = sc.nextLine();
        System.out.println("enter your account no: ");
        a.accountNo = sc.nextInt();
        System.out.println("enter the amount to be deposited: ");
        int amount= sc.nextInt();
        System.out.println("enter the amount to be withdrawn: ");
        int withdraw = sc.nextInt();
        a.displayinfo(a.name,a.accountNo);
        a.deposit(amount);
        a.withdraw(withdraw);
        System.out.println(a.getbalance());
        sc.close();
    }
}