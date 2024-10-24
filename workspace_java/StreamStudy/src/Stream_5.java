import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

//중간 연산 : filter(), map(), mapToInt()
//최종연산 :  reduce(), forEach(), collect(), sum(), count(), [average(), min(), max()]
public class Stream_5 {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1,2,3,4,5);
                                //int x(T t)

        int sum = list.stream().mapToInt(num -> num).sum();
        long count = list.stream().mapToInt(num -> num).count();
        System.out.println(count);

        OptionalInt min = list.stream().mapToInt(num -> num).min();
        System.out.println(min.getAsInt());
        min.ifPresent(n -> System.out.println(n));
    }
}
