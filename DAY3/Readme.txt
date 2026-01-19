Object Oriented Programming : reusability  , scalable , write maintainable , security 
class  -- Entity class :  POJO - Data(Variables) 2) Behaviour (Methods)
        -- Real world entities  : Employee , BankAccount, Student , Teacher , Vehicle 
    It has main pillars :
        Class / Object  : from this blueprint which is a class , the Actual thing which we create  from this blueprint is an object
       Each object has its own data but shares same behaviour
        Encapsulation - wrapping data + methods together and hiding data using private access specifier
        1) Mainly focus on data  , 2) permission access either to read or write or both 
                        3) validation while setting the data 

                        1)Data Security
                        2)Validation Control
                        3) Easy Maintenance

        all attributes of a class are private in nature but indirectly we can 
                        access them so, to achieve  this we create getter and setter methods

                        for eg :  private long password ;  
                        we create a setter method which is write only method to 
                        set the password and we cannot read it as we have not created a getter method for it ( read method) .
        Abstraction : focussing on implementation hiding (achieved by either abstract class or interface)
                       Show what to do , and hide how to do
       
       
        Inheritance :  when a child class is inheriting the features of base class like a child inherit the properties of father
        Polymorphism :  many forms when one object behaves many forms. 
        There  are two types static polymorphism and dynamic polymorphism

        Static Polymorphism : When you have multiple methods with the same name but different
                                signature in same class  -- overloading
        dynamic Polymorphism : When you have multiple methods with the same name , with same 
                                signature in child class  -- overriding


package OOPS;

 interface InterfaceExample{

public  void phoneCall();  // by default these abstract and they do not have  body
public void phoneSms(); 
public  void phoneAudio(); 
    
}






class Hr{
                public void salary(String role , int vc)
                {
                        // manager

                }

                 
                }
                Class TeamLead extends Hr{


                     public void salary(String role , int vc)
                {

                    //se
                }
                

                }


Q1
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

OR


    abstract class PaymentMethod
{
    abstract void payEMI(double amount);
    
}
class CashPayment extends PaymentMethod
{
    void payEMI(double amount)
    {
        System.out.println("EMI of Rs " + amount + " is paid using Cash");
    }
}
class CardPayment extends PaymentMethod
{
    void payEMI(double amount)
    {
        System.out.println("EMI of RS " + amount+ " is paid using card");
    }
}
//Encapsulation
class BankAccount
{
    private double balance;
    BankAccount(double balance)
    {
        this.balance = balance;
    }
    void deposit(double amount)
    {
        balance+=amount;
        System.out.println("Deposited Rs: " + amount);
    }
    void withdraw(double amount)
    {
        if(amount <= balance)
        {
            balance -= amount;
            System.out.println("Withdrawn Rs: " + amount);
        }
        else{
            System.out.println("Insufficient balance");
        }
    }
    double getBalance()
    {
        return balance;
    }
}
// Inheritance
class LoanAccount extends BankAccount
{
    LoanAccount(double balance)
    {
        super(balance);
    }
    double calculateEMI(double laonAmount, int months)
    {
        return laonAmount / months;
    }
}
public class BankAccountOops {
    public static void main(String[] args) {
        LoanAccount acc = new LoanAccount(10000);
        acc.deposit(2000);
        acc.withdraw((1000));
        System.out.println("Current Balance : Rs" + acc.getBalance() );
        double laonAmount = 12000;
        int months = 12;
        double emi = acc.calculateEMI(laonAmount, months);
        System.out.println("Monthly EMI: " + emi);
        PaymentMethod payment;
        payment = new CashPayment();
        payment.payEMI(emi);
        payment = new CardPayment();
        payment.payEMI(emi);
    }
    
}

Kavali Jaya Lakshmi . 11:14
import java.util.Scanner;

/* Bank Account Class */
class BankAccount {
    private double balance;   // private variable (encapsulation)

    // Constructor
    public BankAccount(double bal) {
        balance = bal;
    }

    // Deposit money
    public void deposit(double amount) {
        balance = balance + amount;
    }

    // Withdraw money
    public void withdraw(double amount) {
        balance = balance - amount;
    }

    // Get balance
    public double getBalance() {
        return balance;
    }
}

/* Loan Account Class */
class LoanAccount {
    private double loanAmount;   // private variable

    // Constructor
    public LoanAccount(double loan) {
        loanAmount = loan;
    }

    // Calculate EMI (simple logic)
    public double calculateEMI() {
        return loanAmount / 12;
    }

    // Pay EMI
    public void payEMI(String mode) {
        System.out.println("EMI paid using " + mode);
    }
}

/* Main Class */
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Bank Account
        BankAccount acc = new BankAccount(5000);
        acc.deposit(2000);
        acc.withdraw(1000);

        System.out.println("Current Balance: " + acc.getBalance());

        // Loan Account
        LoanAccount loan = new LoanAccount(12000);
        double emi = loan.calculateEMI();

        System.out.println("Monthly EMI: " + emi);

        System.out.print("Enter payment mode (Cash/Card): ");
        String mode = sc.next();

        loan.payEMI(mode);
    }
}
