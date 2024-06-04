package 다섯_반복문.문제;

//1~10까지의 합
public class Test_1_9 {
    public static void main(String[] args) {
        int i = 1;
        int sum = 0;

        //i < 6
        while(i < 11){
            sum = sum + i; // sum +=i;
            i++;
        }
        System.out.println(sum);

    }
}
