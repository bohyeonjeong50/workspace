import java.util.Optional;

public class Optional_5 {
    public static void main(String[] args) {

        MemberVO member = new MemberVO("홍길동", 20);
        Optional<MemberVO> op1 = Optional.of(member);

        //회원 정보가 null이 아니라 회원의 이름을 출력.
        if(member != null){
            System.out.println(member.getName());
        }

        op1.ifPresent( m -> System.out.println(m.getName()));

        //첫번째 매개변수 : 데이터가 존재할 때
        //두번째 매개변수 : 데이터가 존재하지 않을 때
        //Consumer<T> -> void x(T t)
        //Runnable<T> -> void run()
        op1.ifPresentOrElse(
                m -> System.out.println(m.getName()),
                () -> System.out.println("회원이 이름정보가 없습니다.")
        );


    }
}
