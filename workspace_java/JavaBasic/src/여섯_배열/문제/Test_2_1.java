package 여섯_배열.문제;


import java.util.Scanner;

public class Test_2_1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("배열의 크기 : ");
        int length = sc.nextInt();

        int[] arr = new int[length];

        for (int i = 0; i < arr.length; i++){
            arr[i] = i + 1;
        }

        int sum = 0;
        for(int e : arr){
            sum = sum + e;
        }

        System.out.println(sum / (double)arr.length);

    }
}
