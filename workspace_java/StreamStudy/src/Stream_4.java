import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Stream_4 {
    public static void main(String[] args) {

        List<Student> list = new ArrayList<>();
        list.add(new Student("김김", 20));
        list.add(new Student("홍홍홍", 30));
        list.add(new Student("이이이이", 40));
        list.add(new Student("박박박박박", 50));
        list.add(new Student("최초최최최최", 60));

        //스트림을 사용해서 list 저장된 학생 중
        //이름이 4글자 이상인 학생의 나이의 합을 출력
        int sumOfAge = list.stream()
                .filter(stu -> stu.getName().length() >= 4)
                .mapToInt(stu -> stu.getScore())
                .sum();

        //중간연산의 결과로 나오는 데이터를 리스트 형태로 저장하는 최종연산
        List<Student> result = list.stream().filter(stu -> stu.getScore() > 30)
                .collect(Collectors.toList());

    }


}
