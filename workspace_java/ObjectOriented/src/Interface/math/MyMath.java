package Interface.math;

public class MyMath implements MathUtil {
    //매개변수로 받은 두 수 중 작은 수를 리턴
    @Override
    public int getMin(int a, int b) {
        return a < b ? a : b;
    }

    @Override
    public double getCircleArea(int radius) {
        return 0;
    }

    @Override
    public int getMultiple(int num1, int n) {
        int result = 1;
        for(int i = 0; i < n; i++){
            result = result * num1;
        }

        return 0;
    }
}
