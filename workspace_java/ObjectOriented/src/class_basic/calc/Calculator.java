package class_basic.calc;

public class Calculator {
    private int num1;
    private int num2;

    //더한 결과 리턴
    public int getSum(){
        return num1 + num2;
    }
    //빼기 결과 리턴
    public int getSub(){
        return num1 - num2;
    }

    //곱한 결과 리턴
    public int getMulti(){
        return num1 * num2;
    }
    //나눗셈 결과 리턴
    public double getDiv(){
        return num1 / (double)num2;
    }
}
