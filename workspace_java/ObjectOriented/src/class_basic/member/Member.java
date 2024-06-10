package class_basic.member;

public class Member {
    //회원정보로는 이름, 아이디, 비밀번호, 나이


    String name;
    String Id;
    String pw;
    int age;


    //회원 등록을 위한 메소드

    public void setName(String name1, String Id1, String pw1, int age1) {
        name = name1;
        Id = Id1;
        pw = pw1;
        age = age1;
    }

        public void printMemberinfo () {
            System.out.println("이름 : " + name);
            System.out.println("아이디 : " + Id);
            System.out.println("비번 : " + pw);
            System.out.println("나이 : " + age);
        }

}

