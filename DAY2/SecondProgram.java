class PrintingVariables {
    static String companyName = "Wipro Ltd";
}
public class SecondProgram {
    String name = "Niti ";
    int age = 45; // instance variables

    public static void main(String[] args) {
        SecondProgram obj = new SecondProgram();
        System.out.println(obj.name);
        System.out.println(obj.age);
        System.out.println(PrintingVariables.companyName);
        //type casting is required you want to save the value from big bucket to small bucket
byte value1 = 10;
short value2 = value1;  // implicit casting -- Widening type casting
short value3=78;
byte value4 = (byte)value3;  // explicit casting -- > Narrowing type casting

}
}
