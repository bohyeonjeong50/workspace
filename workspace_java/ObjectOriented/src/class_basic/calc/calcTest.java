package class_basic.calc;

import java.util.Scanner;

public class calcTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Calculator cal = new Calculator();

        System.out.print("첫번째 수 : ");
        int num1 = sc.nextInt();
        System.out.print("두번째 수 : ");
        int num2 = sc.nextInt();
        System.out.print("연산자 : ");
        String oper = sc.next();

        //cal 객체의 num1과 num2를 키보드로 입력받은 값으로 변경
//        cal.setNumber(num1, num2);
        
        if(oper.equals("+")){
            System.out.println(num1 + "+" + num2 + "=" + cal.getSum());
        }
        else if(oper.equals("-")){
            System.out.println(num1 + "-" + num2 + "=" + cal.getSub());
        }
        else if(oper.equals("*")) {

        }
        else if (oper.equals("/")) {

        }
        else{
            System.out.println("연산자를 잘못입력했어요~");
        }

    }
}
