public class FirstProgram {
    // these variables are non-static which we are defining in a class directly
    short shortValue = 23;
    double price = 678.00;
    float totalPrice = 5656.00F;
    // naming convention of a class in java where starting alphabet of each word is in caps
    String name = " Niti Dwivedi ";
    char charValue = 'A';
    String address = " delhi 343 dsf ";
    // constructor name must be the same as class name
    // constructor has access specifier
    // constructor do not have a return type
    private FirstProgram() {
    }
    // method name
    public double displayNumber() {
        double age = 56.09;
        return age;
    }

    public static void main(String[] args) {
        // declaration and initialization of a variable
        int number1 = 20;
        System.out.println("My first program in java");
        System.out.println("The value of number 1 = " + number1);
    }
}