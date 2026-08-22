
public class problemSeven {
    public static void main(String[] args) {
        int num1 = -10;
        int num2 = -3;
        int num3 = -4;

        System.out.println("Findind the largest number among 3 numbers : " + num1 + "," + num2 + "," + num3);
        if (num1 > num2 && num1 > num3) {
            System.out.println("The largest number is : " + num1);
        } else if (num2 > num1 && num2 > num3) {
            System.out.println("The largest number is : " + num2);
        } else {
            System.out.println("The largest number is : " + num3);
        }

    }
}