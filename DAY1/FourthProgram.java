public class FourthProgram {
    public static void main(String[] args) {
        int sum = 0;
        int[] subjectMarks = { 45, 67, 45, 67, 45 };
        //for (int j : subjectMarks){
        for (int i = 0; i < subjectMarks.length; i++) {
            System.out.println("The marks are given below :" + i);
        }
        for (int i = 10; i >0; i--) {
            sum = sum + i;
            System.out.println("The no is printed as :" + i);
        }
        System.out.println("The total sum value is :" + sum);
    }
}
