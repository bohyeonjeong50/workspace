package test;

import java.util.Scanner;

public class Test4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("정수 입력 : ");
        int num = sc.nextInt();

        gugudan(3);
    }

    public static void gugudan(int num){
        for(int i = 1; i < 1000; i++){
            System.out.println(num + " * " + i + " = " + (num * i));


        }
    }


}
