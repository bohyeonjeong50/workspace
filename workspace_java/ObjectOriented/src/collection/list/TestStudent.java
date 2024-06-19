package collection.list;


import java.util.ArrayList;
import java.util.List;

public class TestStudent {
    public static void main(String[] args) {
        Student s1 = new Student("kim", 80, 70);
        Student s2 = new Student("lee", 90, 50);
        Student s3 = new Student("park", 60, 50);

        List<Student> stuList = new ArrayList<>();
        stuList.add(s1);
        stuList.add(s2);
        stuList.add(s3);

        //1. 리스트에 저장된 모든 정보 출력
        for(Student stu : stuList){
            System.out.println(stu);
        }

        System.out.println();

        //2. 총점이 150점 이상인 학생의 모든 정보 출력
        for(int i = 0; i < stuList.size(); i++){
            if(stuList.get(i).getTotalScore() >= 150){
                System.out.println(stuList.get(i));
            }
        }

        System.out.println();

        //3. 모든 학생에 대한 평균 점수 출력
        int sum = 0;
        for(Student stu : stuList){
            sum = sum + stu.getTotalScore();
        }
        System.out.println((double)sum / stuList.size());

        System.out.println();

        //4. 총점이 1등인 학생의 모든 정보 출력
        int index = 0; //총점이 1등인 학생의 index
        int max = 0; //가장 높은 총점
        for(int i = 0; i < stuList.size(); i++){
            if(max < stuList.get(i).getTotalScore()){
                max = stuList.get(i).getTotalScore();
                index = i;
            }
        }
        System.out.println(stuList.get(index));






    }
}
