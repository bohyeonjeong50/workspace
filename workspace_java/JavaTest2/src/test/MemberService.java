package test;

import javax.xml.transform.Source;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class MemberService {
    private List<Member> memberList;
    private Scanner sc;

    public MemberService(){
        sc = new Scanner(System.in);

        memberList = new ArrayList<>();

        Member e1 = new Member("자바", "java", "abcd1234", 20);

        memberList.add(e1);
    }

    public void login(){
        boolean isLogin = true;
        boolean isFind = false;

        while(isLogin){
            System.out.print("ID : ");
            String id = sc.next();
            System.out.print("PW : ");
            String pw = sc.next();

            for (Member e : memberList){
                if (e.getId() == id && e.getPw().equals(pw)){
                    isLogin = true;
                    System.out.println("로그인 가능");
                    isFind = false;

                }
            }
            if (!isFind){
                System.out.println("로그인 불가능");
            }
        }

    }

}
