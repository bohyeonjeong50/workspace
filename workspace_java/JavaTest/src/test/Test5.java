package test;

import java.util.Arrays;
import java.util.Scanner;

public class Test5 {
    public static void main(String[] args) {

        //1) 먼저 크기가 3인 정수형 배열을 생성하고 배열의 각 요소에 1 ~ 9사이의 랜덤한 정수를 저장한다. 중복 불허.
        //2) 3스트라이크가 될 때까지 프로그램을 지속되어야 하며 실행 결과 3스트라이크를 맞춘 도전 횟수를 출력
       // 3) Scanner를 통해 입력한 세 수와 요구사항 1)에서 생성한 랜덤한 세 수를 비교하여 스트라이크와 볼을 결정한다.
       // 4) 키보드로 입력한 수가 1)에서 만든 배열의 수와 일치하며 위치도 같다면 스트라이크, 수는 일치하지만 위치가 다르면
       // 볼이다.

        Scanner sc = new Scanner(System.in);

        //문제 1~9까지 랜덤 정수 중복없이 저장
        int[] baseball = new int[3];

        for(int i = 0;  i < baseball.length; i++){
            int rand = (int)(Math.random() * 9 + 1);
            baseball[i] = rand;

            //중복검사
            for(int j = 0 ; j < i ; j++){
                if(baseball[j] == baseball[i]){//중복 데이터 있으면..
                    i--;
                    break;
                }
            }


        }

        //대답
        int[] answer = new int[3];

        System.out.println(Arrays.toString(baseball));
        System.out.println("게임을 시작합니다~~~~~");

        int tryCnt = 0;
        while(true){

            tryCnt++;
            System.out.print(tryCnt + ">>");

            answer[0] = sc.nextInt();
            answer[1] = sc.nextInt();
            answer[2] = sc.nextInt();

            //정답 대조
            //baseball = [5, 1, 2]
            //answer = [1, 2, 3]
            int strike = 0;
            int ball = 0;

            for(int i = 0; i < baseball.length; i++){
                for(int j = 0; i < answer.length; j++){
                    if(baseball[i] == answer[j] && i ==j){
                        strike++;
                    }
                    else if(baseball[i] == answer[j]){
                        ball++;
                    }
                }
            }
            System.out.println(strike + "S" + ball + "B");

            if(strike == 3){
                break;
            }
        }

        System.out.println(tryCnt + "회수만에 맞췄습니다");
    }
}
