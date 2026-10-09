public class Demo{
    public static void main(String[] args) {
            Student s1 = new Student();
            s1.name = "Aman";
            s1.age = 19;
            s1.rollNo = 1;
            s1.College = "NIT";
            s1.markAttendance();
            s1.studDetails();
        }
    }

    class Student{
        String name;
        int age;    
        int rollNo;
        String College ;

        void markAttendance(){
            System.out.println("My name is "+ name + " and my roll no is "+ rollNo + " and I am present for class today");
        }
        void studDetails(){
            System.out.println("My name is " + name + " and my roll no is " + rollNo + "My college name is " + College + " and my age is " + age);
        }
    }