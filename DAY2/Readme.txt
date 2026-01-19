DAY2
Object Oriented Programming
    It has main pillars :
        Class / Object
        Encapsulation - 1) Mainly focus on data  , 2) permission access either to read or write or both 
                        3) validation while setting the data 
        all attributes of a class are private in nature but indirectly we can 
                        access them so, to achieve  this we create getter and setter methods

                        for eg :  private long password ;  
                        we create a setter method which is write only method to 
                        set the password and we cannot read it as we have not created a getter method for it ( read method) .
        Abstraction : focussing on implementation hiding (achieved by either abstract class or interface)
        Inheritance :  when a child class is inheriting the features of base class like a child inherit the properties of father
        Polymorphism :  many forms when one object behaves many forms. 
        There  are two types static polymorphism and dynamic polymorphism

        public class Main {

    public static String reverseEachWord(String s) {

        String[] words = s.split(" ");
        String result = "";

        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            String rev = "";

            for (int j = word.length() - 1; j >= 0; j--) {
                rev = rev + word.charAt(j);
            }

            result = result + rev;

            if (i < words.length - 1) {
                result = result + " ";
            }
        }
        return result;
    }

    public static void main(String[] args) {

        if (args.length > 0) {
            System.out.print(reverseEachWord(args[0]));
        }
    }
}


/*
    public static void main(String[] args) {
        
        String str = "Here is my Java Program";
        int count = 0;
        str = str.toLowerCase();
        for(int i =0; i<str.length();i++){
            char ch = str.charAt(i);
            if(ch == 'a' || ch == 'e' || ch =='i' || ch == 'o' || ch == 'u'){
                count++;
            }
        }
        System.out.println("Number of vowels: " + count);
    }
        //use case count the total words dont include the spaces  s1.split(" ").length();

        public class WordCount {
    public static void main(String[] args) {
        String s1 = "Here is my java program";
        String[] words = s1.split(" ");
        int count = words.length;
        System.out.println("Total words: " + count);
    }
}

//Porchelvi M 12:22

import java.util.Scanner;
public class StringExDay2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String s = sc.nextLine();   
        String vowels = "aeiouAEIOU";
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (vowels.contains(String.valueOf(ch))) {
                count++;
            }
        }
        System.out.println("Vowel count: " + count);
        sc.close();
    }
}

/*Anusiya M 12:23
//create a string program to count the vowels from a given string 
//   String value = "Here is my java program"
public class VowelsFinding {
    public static  void main(String[] args){
        String s="Here is my java program";
        s=s.toLowerCase();
        int count=0;
        String[] arr=s.split(" ");
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length();j++){
                count++;
            }
            }
        
        System.out.println("Count is: "+count);
    }
}
    Kavali Jaya Lakshmi . 12:28
public class WordCount {
    public static void main(String[] args) {        
        String s = "Here is my java program";
        String[] words = s.split(" ");
        int count = words.length;
        System.out.println("Total word count: "+count);
    }
}

GOGULA MAHESH BABU . 12:43
public class vowelcount {
    public static void main(String[] args) {
        String input = "Here is my java program";
        int count = 0;
        input = input.toLowerCase(); 
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        System.out.println("Number of vowels: " + count);
    }
}
public class totalcharwithoutspace {
    public static void main(String[] args){
        String s="Mahesh Babu Gogula";
        String[] ch=s.split(" ");
        int c=ch.length()
        System.out.println("Total count" + c);
    }
}

Reethu M . 12:24
import java.util.Scanner;
public class StringExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().trim();
        if (s.isEmpty()) {
            System.out.println(0);
            return;
        }
        String[] words = s.split(" ");
        System.out.println(words.length);
    }
}

}

Dhanasree K 12:25
public class VowelCount {
    public static void main(String[] args) {
        String s = "Here is my java program";
        s=s.toLowerCase();
        int count = 0;
        String[] w = s.split(" ");
        int wordCount = w.length;
         // to handle both upper & lower case
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || 
                ch == 'o' || ch == 'u') {
                count++;
            }
        }
        System.out.println("Number of vowels: " + count);
        System.out.println("Total words: " + wordCount);
    }
}
*/

Day1 2nd question
import java.util.Scanner;
public class Main {

   public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        int[] freq = new int[26];

        // Count frequency of each character
        for (char ch : s.toCharArray()) {
            freq[ch - 'a']++;
        }

        // Find maximum frequency
        int maxFreq = 0;
        for (int count : freq) {
            maxFreq = Math.max(maxFreq, count);
        }

        // Minimum moves
        int result = s.length() - maxFreq;
        System.out.println(result);

        sc.close();
    }
}