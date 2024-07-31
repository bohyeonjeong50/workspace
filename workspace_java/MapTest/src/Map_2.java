import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Map_2 {
    public static void main(String[] args) {
        //학생 객체 3명 생성 후
        //3명의 학생을 map에 저장하시오.
        //이때 키는 각 학생의 학번으로 지정합니다.

        Student s1 = new Student(1, "김자바");
        Student s2 = new Student(2, "박자바");
        Student s3 = new Student(3, "최자바");

        Map<Integer, Student> stuMap = new HashMap<>();




        stuMap.put(s1.getStuNum(), s1);
        stuMap.put(s2.getStuNum(), s2);
        stuMap.put(s3.getStuNum(), s3);

        //키가 2번인 학생의 학생 이름 출력
        stuMap.get(2).getStuName();



    }
}
