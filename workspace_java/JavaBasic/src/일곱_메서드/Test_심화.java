package 일곱_메서드;

import javax.xml.transform.Source;
import java.sql.SQLOutput;
import java.util.Arrays;

public class Test_심화 {
    public static void main(String[] args) {
//        int[] a = {1, 3, 5};
//        arr_5(a);
//        System.out.println(test3_4());
//        System.out.println(test3_5(5));

//        int[] arr = {1, 7, 5, 3, 2};
//        int max =test3_6(arr);
//        System.out.println(max);

//        String[] ar = {"a", "b", "c"};
//        String result = test3_7(ar);
//        System.out.println(result);

//        int[] a = {1,2,3,4,5,6,7,8,9,10};
//        int[] result = test3_9(a);

//        System.out.println(Arrays.toString(result));

    }

    //9번
//    public static void test3_9(int[] array){
//        //매개변수로 넘어온 배열 요소 중 짝수이 개수
//        int cnt = 0;
//        for(int e: array){
//            if(e % 2 == 0){
//                cnt++;
//            }
//        }
//        //짝수만 저장될 배열 생성
//        int[] resultArr = new int[cnt];
//
//        int index = 0;
//        for(int i = 0; i < array.length; i++){
//            if(array[i] % 2 == 0){
//                resultArr[index] = array[i];
//                index++;
//            }
//        }
//        return resultArr;
//    }


    //7번
    public static String test3_7(String[] arr){
        String result = "";
        for(int i = 0; i < arr.length; i++){
            result = result + arr[i];
        }
        return result;
    }

    //6번
    public static int test3_6(int[] array){
        int max = 0;
        for(int i = 0; i < array.length; i++){
            if(max < array[i]){
                max = array[i];
            }
        }
        return  max;
    }


    //5번
    public static boolean test3_5(int num){
//        return num % 2 == 0 ? true : false;
        return num % 2 == 0;
    }


    //4번
    public static int test3_4(){
        //0.0 <= x < 51.0
        return (int)(Math.random() * 50 + 1);
    }



    //2번 정수 하나를 매개변수로 받아 해당 정수의 구구단을 출력하는 메소드를 만들고 호출
    public static void gugudan(int num){
        for (int i = 1; i < 10; i++){
            System.out.println(num + "*" + i + "=" + (num * i));
        }

    }

    //5번. 정수형 배열을 매개변수로 받아 배열의 모든 요소를 출력하는 메소드를 만들고 호출
    public static void arr_5(int[] arr){
        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }



}
