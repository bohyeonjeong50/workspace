import java.util.List;
import java.util.Optional;

public class Optional_3 {
    public static void main(String[] args) {

        Optional<String> op = Optional.of("Hello World");

        //Function<T> -> R x(T t)
        //map() 함수는 실행결과를 다시 optional 상자에 담아서 리턴한다!
        Optional<String> result1 = op.map( (str) ->  str.toLowerCase() );
        System.out.println(result1.get());

        String result2 = op.map( (str) ->  str.toLowerCase() ).get();

        //////////////////////////////////////////////////////////////////////
        Optional<String> op1 = Optional.of("Hello World");

        String result3 = op1.map(str -> str.toUpperCase())
                            .map(str -> str.replace(" ", ""))
                            .get();

        //"HELLOWOLRD"

    }
}
