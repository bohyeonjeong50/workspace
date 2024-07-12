package test;

import java.util.Scanner;

public class Test4 {
    public static void main(String[] args) {
        // 4. 1 ~ 999까지의 수 중 임의의 숫자를 Scanner를 통해 입력 받아, 입력받은 숫자의 369게임 결과를 출력하는
        //프로그램을 만드시오. 만약 박수가 없는 숫자라면 ‘박수 0번’, 박수 한 번이라면 ‘박수 1번’, 박수 두 번이라면 ‘박
        //수 2번’, 박수가 3번이면 ‘박수 3번’이라는 문자열을 출력하면 된다. 단, 키보드로 숫자를 입력받을 때 1 ~ 999
        //까지 숫자 이외의 데이터는 입력받지 않는다고 가정한다.

        Scanner sc = new Scanner(System.in);

        System.out.print("정수 입력 : ");
        int num = sc.nextInt();

        //백의 자리 숫자
        int huns = num / 100;

        //십의 자리
        int tens = num % 100 / 10;

        //일의 자리
        int ones = num % 10;

        int clapCnt = 0;


        if(huns == 3 || huns == 6 || huns == 9){
            clapCnt++;
        }

        if(huns == 3 || huns == 6 || huns == 9){
            clapCnt++;
        }

        if(huns == 3 || huns == 6 || huns == 9){
            clapCnt++;
        }



    }
}
