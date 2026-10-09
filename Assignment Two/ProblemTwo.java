public class ProblemTwo {
    public static void main(String[] args) {
        int year =2000;
        System.out.println("Checking whether the year is leap year or not : " + year);
        if(year%4==0 && year%100!=0 || year%400==0){
            System.out.println("The year is leap year");
        }else{
            System.out.println("The year is not leap year");
        }
    }
}
