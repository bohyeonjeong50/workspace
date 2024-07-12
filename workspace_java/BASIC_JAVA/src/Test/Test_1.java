package Test;

public class Test_1 {
    public static void main(String[] args) {
        //1번
        //1)정수를 3개 저장할 수 있는 배열
        int[] arr1;

        arr1 = new int[3];

        // 2) 실수를 5개 저장할 수 있는 배열
        double[] arr2;
        arr2 = new double[5];

        // 3) 문자열을 10개 저장할 수 있는 배열
        String[] arr3;
        arr3 = new String[10];

        // 4) 1,5,10을 초기값으로 저장된 배열

        int[] arr4 = {1, 5, 10};

        // 5) “자바”, “c언어”, “파이썬”이 초기값으로 저장된 배열
        String[] arr5 = {"자바", "c언어", "파이썬"};

        //2번
        //

        //3번
        //

        //4번
        //

        //5번
        //5. 정수를 5개 저장할 수 있는 배열을 생성하고 배열의 2번째, 4번째 요소의 값을 출력해보아라.
        int[] arr6 = new int[5];


        System.out.println(arr6[2]);
        System.out.println(arr6[4]);

        //6. 정수를 10개 저장할 수 있는 배열을 생성하고 모든 요소의 값을 출력해보아라.
        int[] arr7 = new int[10];

        System.out.println(arr7[0]);

        for (int i=0; i< arr7.length; i++){
            System.out.println(arr7[i]);
        }

        //7. 정수를 10개 저장할 수 있는 배열을 생성하고 모든 요소에 3을 넣어라.
        // 그리고 3이 잘 들어갔는지 출력하여 확인해보아라.
        int[] arr8 = new int[10];

        System.out.println(arr8[0]);
        for (int i=0; i< arr8.length; i++ ){
            System.out.println(arr8[i]);
        }

        //8. 정수를 10개 저장할 수 있는 배열을 생성하고, 각 요소에 1 ~ 10까지 차례대로 넣어보라.
        // 그리고 값이 잘 들어갔는지 확인해보라.

        int[] arr = new int[10];


        //9. 1,5,7을 초기값으로 저장하고 있는 배열을 만들고, 배열의 모든 요소의 합을 출력해보아라.














    }
}
