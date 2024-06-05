package 여섯_배열.문제;

import java.util.Scanner;

public class Test_1_1_19 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        test14(5);
//        test15(10, 5);
//        test16(5);
//        test17(5, 1);
//        test18(1, 10);
        test19("집에가자", 10);
    }

    public static void test19(String s, int num){
        String result = "";
        for (int i = 0; i < num; i++){
            result = result + s;
        }
        System.out.println(result);
    }


    public static void test18(int a, int b){
        int max = a > b ? a : b;
        int min = a < b ? a : b;

        int cnt = 0;
        for (int i = min + 1; i < max; i++){
            if (i % 5 ==0){
                cnt++;
            }
        }
        System.out.println(cnt);
    }


    //1  5   ->  2  3  4
    public static void test17(int a, int b){
        int max = a > b ? a : b;
        int min = a < b ? a : b;

        for (int i = min + 1; i < max; i++){
            System.out.println(i);
        }

    }


    public static void test16(int num){
        for(int i = 0; i < num + 1 ; i++){
            System.out.println(i);
        }
    }


    //15번
//    public static void test15(int a, int b){
//        if(a % 2 == 0 && b % 2 == 0){
//            System.out.println("둘 다 짝수");
//        }
//        else if(a % 2 != 0 && b % 2 ! = 0){
//            System.out.println("둘 다 홀수");
//        }
//        else{
//            System.out.println("하나만 짝수");
//        }
//
//    }




    //14번
    public static void test14(int num){
        //삼항연산자
        int a = 10 > 5 ? 1 : 2;


        if (num % 2 == 0){
            System.out.println("짝수");
        }
        else {
            System.out.println("홀수");
        }

        System.out.println(num % 2 == 0 ? "짝수" : "홀수");



    }
}

