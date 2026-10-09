
public class ProblemOne {
    public static void main(String[] args) {
        int avgMarks = 68;
        System.out.println(" Average Marks : " + avgMarks);
        if (avgMarks >= 90) {
            System.out.println("Grade A");
        } else if (avgMarks >= 70 && avgMarks <= 89) {
            System.out.println("Grade B");
        } else if (avgMarks >= 50 && avgMarks <= 69) {
            System.out.println("Grade C");
        } else if (avgMarks >= 30 && avgMarks <= 49) {
            System.out.println("Grade D");
        } else {
            System.out.println("Grade E");
        }

    }
}
