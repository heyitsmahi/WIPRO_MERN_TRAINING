class Main {

    public static void main(String[] args) {

        String input = "Great Learning";

        // Call the method to reverse each word
        String result = reverseWords(input);

        // Print the result
        
        System.out.println( result);
    }

    // Method to reverse each word in the string
    public static String reverseWords(String input) {
        // Split the string into words
        String[] words = input.split("\\s+");
        StringBuilder result = new StringBuilder();

        // Reverse each word and append to the result
        for (String word : words) {
            result.append(new StringBuilder(word).reverse().toString()).append(" ");
        }

        // Convert StringBuilder to string and trim the trailing space
        return result.toString().trim();
    }
}
    
