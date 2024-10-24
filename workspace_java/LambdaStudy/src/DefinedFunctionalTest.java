import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class DefinedFunctionalTest {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);    list.add(2);    list.add(3);
        list.add(4);    list.add(5);

        DefinedFinctional.printEvenOfList(list);
        System.out.println();
        DefinedFinctional.printOddOfList(list);
        System.out.println();
        DefinedFinctional.printSumOfList(list);

        Predicate<Integer> p = (num) ->  num % 2 == 0;
        DefinedFinctional.printOfList(list, p);

        //list에서 짝수만 삭제
        for(int i = 0 ; i < list.size() ; i++){
            if(list.get(i) % 2 == 0){
                list.remove(i);
                i--;
            }
        }

        //위의 코드를 함수형 인터페이스 사용으로 변환
        list.removeIf(num -> num > 2);
        list.forEach(num -> System.out.println(num));

        //짝수만 삭제됐는지 확인
        for(int e : list){
            System.out.print(e + " ");
        }

        //Consumer<T> -> void accept(T t) 연습



    }

}
