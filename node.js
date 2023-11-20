import java.util.Scanner;

public class GreetingProgram {
    public static void main(String[] args) {
        // Create a Scanner object to read input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Print a personalized greeting
        System.out.println("Hello, " + name + "! Welcome to the Greeting Program.");

        // Close the scanner to prevent resource leak (optional)
        scanner.close();
    }
}