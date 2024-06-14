package Interface.student;

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        MyStudent s = new MyStudent();

        Student[] students = new Student[5];
        Student s1 = new Student("임꺽정",80,70,90);
        Student s2 = new Student("홍길동",80,70,100);
        Student s3 = new Student("유관순",80,100,90);
        Student s4 = new Student("이순신",100,70,90);
        Student s5 = new Student("신사임당",80,50,90);
        students[0] = s1;
        students[1] = s2;
        students[2] = s3;
        students[3] = s4;
        students[4] = s5;

        String result1 = s.getGradeByStudentName(students, "유관순");
        System.out.println(result1);

        System.out.println();

        int[] result2 = s.getTotalScoresToArray(students);
        System.out.println(Arrays.toString(result2));

        System.out.println();

        Student stu = s.getHighScoreStudent(s1, s2);
        System.out.println(stu.getName());



    }
}
