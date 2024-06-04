package 여섯_배열.문제;

//정수를 10개 저장할 수 있는 배열을 생성하고, 각 요소에 1 ~ 10까지 차례대로 넣어보라.

public class Test_1_8 {
    public static void main(String[] args) {
        int[] arr = new int[10];

        for(int i = 0; i <arr.length; i++){
            arr[i] = i + 1;
        }

        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }


}
