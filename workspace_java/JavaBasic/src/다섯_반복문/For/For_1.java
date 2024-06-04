package 다섯_반복문.For;

public class For_1 {
    public static void main(String[] args) {
//        int i = 1;
//        int cnt = 0;
//
//        while (i < 11){
//            System.out.println(i);
//            i++;
//        }
//        ////////////////////////////////////
//        for(int i = 1; i < 11; i++){
//            System.out.println(i);
//        }

        //1~10까지 합
        int sum = 0;
        for(int i = 1; i < 11; i++){
            sum = sum + i;
        }
        System.out.println(sum);



    }
}
