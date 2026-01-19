//create a string program to count the vowels from a given string 
//   String value = "Here is my java program"
//import java.util.*;
public class StringExDay2 {
    public static void main(String arg[]){
        String s="Here is my java program";
        s=s.toLowerCase();
        int count=0;
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            if(ch =='a'||ch =='e'||ch =='i'||ch =='o'||ch =='u' ){
                count++;
            }
        }
        System.out.println("Number of vowels: " +count);
    }
}


