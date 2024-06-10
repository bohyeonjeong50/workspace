package class_basic.man;

public class ManTest {
    public static void main(String[] args) {
       //멤버 각각의 값을 변경하는 메소드를 3개
        Man man = new Man("홍", 20, "울산");

        //이름 변경
        //man.name = "kim";
        man.setName("kim");

//        System.out.println(man.name);
        System.out.println(man.getName());
        man.printMan();

    }
}
