package 여섯_배열.문제;

//1, 2, 3, 4, 5, 6 ,7 ,8 로 초기화된 배열을 만들고, 배열의 요소 중 짝수의 개수를 구하는 프로그램

public class Test_1_11 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8};

        int cnt = 0;
        for(int e : arr){
            if(e % 2 == 0){
                cnt++;
            }
        }
        System.out.println(cnt);

//        int cnt = 0;
//        for(int i = 0; i < arr.length; i++){
//            if (arr[i] % 2 == 0){
//                cnt++;
//            }
//        }
//        System.out.println(cnt);







    }
}
