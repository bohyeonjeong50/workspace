import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

//정의되어 있는 함수형 인터페이스 연습용 클래스
public class DefinedFinctional {
    //Predicate 미사용 메서드
    // 1. 매개변수로 리스트가 들어오면 리스트의 요소 중 짝수만 출력
    public static void printEvenOfList(List<Integer> list){
        for(int e : list){
            if(e % 2 == 0){
                System.out.print(e + " ");
            }
        }
    }
    // 2. 매개변수로 리스트가 들어오면 리스트의 요소 중 홀수만 출력
    public static void printOddOfList(List<Integer> list){
        for(int e : list){
            if(e % 2 != 0){
                System.out.print(e + " ");
            }
        }
    }
    // 3. 매개변수로 리스트가 들어오면 리스트의 요소 중 짝수의 합 출력
    public static void printSumOfList(List<Integer> list){
        int sum = 0;
        for(int e : list){
            if(e % 2 == 0){
                sum += e;
            }
        }
        System.out.println(sum);
    }

    //Predicate<T> -> boolean teat(T t) 연습용 메서드
    public static void printOfList(List<Integer> list, Predicate<Integer> p){
        for(int e : list){
            if(p.test(e)){
                System.out.println(e);
            }
        }

        //Function<T, R> -> R apply(T t) 연습 메서드
        

    }
}
