package 다섯_반복문.문제;

//5. 출력문을 한번만 사용하여 ‘2 4 6 8 10’을 출력하되, while문을 사용하여라.
public class Test_1_5 {
    public static void main(String[] args) {
        //1번 방법
        int i = 2;
        while (i < 11){
            System.out.print(i + " ");
            i = i + 2;
        }

        System.out.println(); //개행

        //2번 방법
        int j = 2;
        while(j < 11){
            //j가 짝수일때만 출력
            if(j % 2 == 0){
                System.out.print(j + " ");
            }
            j++;
        }


    }
}
