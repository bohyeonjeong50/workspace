package Interface.array;

public class MyArray implements MyArrayUtil{

    @Override
    public double getTwoArrayAvg(int[] arr1, int[] arr2) {
        int sum1 = 0; //arr1배열의 합
        int sum2 = 0; //arr2배열의 합

        //arr1 배열의 합
        for (int i = 0; i < arr1.length; i++){
            sum1 = sum1 + arr1[i];
        }
        //arr2 배열의 합
        for (int i = 0; i < arr2.length; i++){
            sum2 = sum2 + arr2[i];
        }


        return (sum1 + sum2) / (double)(arr1.length + arr2.length);
    }

    //매개변수로 받은 배열의 모든 요소가 짝수일떄만 리턴 true.
    //array = {2,1,4}
    @Override
    public boolean isEvenArray(int[] array) {
        for(int e : array){
            if (e % 2 == 1){
                return false;
            }
        }


        return true;
    }
}
