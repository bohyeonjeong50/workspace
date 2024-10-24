import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Stream_2 {
    public static void main(String[] args) {
        //list.stream().filter().sum();

        List<Student> list = new ArrayList<>();
        list.add(new Student("김자바", 80));
        list.add(new Student("이자바", 70));
        list.add(new Student("박자바", 100));

        //스트림을 사용해서 list에 저장된 학생 중 점수가 80점 이상인 학생만
        //걸러내는 코드를 작성
        list.stream()
            .filter(s -> s.getScore() >= 80)
            .forEach(s -> System.out.println(s));


    }
}
