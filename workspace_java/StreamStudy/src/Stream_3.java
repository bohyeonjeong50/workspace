import java.util.Arrays;
import java.util.List;

public class Stream_3 {
    public static void main(String[] args) {

        List<String> list = Arrays.asList("box", "robot", "simple");

        list.stream()  //R apply(T t)
                .mapToInt(str -> str.length()) //3, 5, 6
                .sum();

        //.forEach(num -> System.out.println(num));

        //printAll("a", "b", "c");
    }

    //매개변수로 문자열이 1개, 2개, 3개... 몇개 들어올지 모름
    public static void printAll(String...s){
        Arrays.stream(s).forEach(e -> System.out.println(e));
    }

}
