package collection.list;

import java.util.ArrayList;
import java.util.List;

public class TestMember {
    public static void main(String[] args) {
        List<Member> memberList = new ArrayList<>();

        Member m1 = new Member();
        m1.setId("java");
        m1.setPw("1111");
        m1.setName("김");
        m1.setAge(20);

        Member m2 = new Member("python", "2222", "이", 30);
        Member m3 = new Member("c++", "3333", "박", 40);

        memberList.add(m1);
        memberList.add(m2);
        memberList.add(m3);


        //6번
        for(Member member : memberList){
            System.out.println(member);
        }

        System.out.println();

        //7번 리스트에 저장된 모든 회원의 나이의 합
        int sum = 0;
        for(int i = 0; i < memberList.size(); i++){
            sum = sum + memberList.get(i).getAge();
        }
        System.out.println("나이의 합 : " + sum);

        System.out.println();

        //8번 list에 저장된 회원 중 id가 java인 회원을 지우는 코드
        int index = 0;
        for(int i = 0; i < memberList.size(); i++){
            if(memberList.get(i).getId().equals("java")){
                index = i;
            }
        }
        memberList.remove(index);



    }
}
