import java.util.Optional;

public class Optional_2 {
    public static void main(String[] args) {

        Optional<String> op = Optional.of("java"); //()안에 null을 넣으려면 of()가 아니라 ofNullable(null)을 넣어야함

        //데이터가 존재할 때 어떤 내용을 실행할지 작성하고 메서드
        //ifPresent() 메서드의 매개변수 : Consumer<T>
        //Consumer<T> -> void x(T t)
        op.ifPresent ( str -> System.out.println(str));


    }
}
