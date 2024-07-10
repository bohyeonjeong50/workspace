package test;

public class Test3 {
    public static void main(String[] args) {
        int max = 0;
        int[] array = {5, 11, 20, 40, 30};

        for(int i = 0; i < array.length; i++){
            if(max < array[i]){
                max = array[i];
            }
        }

        System.out.println("max : " + max);

        int min = 40;

        for(int i = 0; i < array.length; i++){
            if(min > array[i]){
                min = array[i];
            }
        }

        System.out.println("min : " + min);




    }
}
