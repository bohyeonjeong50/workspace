package collection.list;

import java.util.ArrayList;
import java.util.List;

public class SchoolTest {
    public static void main(String[] args) {
        //자바반에 소속될 학생 3명 생성
        Student_1 s1 = new Student_1("김자바", 20, 80);
        Student_1 s2 = new Student_1("이자바", 30, 90);
        Student_1 s3 = new Student_1("박자바", 40, 100);

        //자바반에 저장할 학생 list
        List<Student_1> stuList1 = new ArrayList<>();
        stuList1.add(s1);
        stuList1.add(s2);
        stuList1.add(s3);


        //자바반
        StudyClass javaClass = new StudyClass("자바반", "강사_자바", stuList1);

        //캐드반에 저장될 학생 3명 생성
        Student_1 s4 = new Student_1("김캐드", 25, 85);
        Student_1 s5 = new Student_1("이캐드", 35, 90);
        Student_1 s6 = new Student_1(" 박캐드", 45, 100);

        //캐드반 학생들이 저장될 list생성 및 해당 list에 캐드반 학생 저장
        List<Student_1>stuList2 = new ArrayList<>();
        stuList2.add(s4);
        stuList2.add(s5);
        stuList2.add(s6);

        //캐드반 객체 생성 + 캐드반에 위에서 만든 캐드반 학생 목록 저장
        StudyClass cadClass = new StudyClass("캐드반", "캐드_강사", stuList2);

        //영상반에 저장될 학생 3명 생성
        Student_1 s7 = new Student_1("김영상", 22, 77);
        Student_1 s8 = new Student_1("이영상", 32, 67);
        Student_1 s9 = new Student_1("박영상", 42, 87);

        //영상반 학생들이 저장될 list생성 및 해당 list에 캐드반 학생 저장
        List<Student_1>stuList3 = new ArrayList<>();
        stuList3.add(s7);
        stuList3.add(s8);
        stuList3.add(s9);

        //영상반 객체 생성 + 영상반에 위에서 만든 영상반 학생 목록 저장
        StudyClass mediaClass = new StudyClass("영상반","영상_강사", stuList3);

        //교실을 여러개 저장할 수 있는 list 생성
        List<StudyClass> classList = new ArrayList<>();
        classList.add(javaClass);
        classList.add(cadClass);
        classList.add(mediaClass);


        School school = new School(classList);

        //학교 안의 모든 학생의 정보 출력
        for(int i = 0; i < school.getClassList().size(); i++){
            for(int j = 0; j < school.getClassList().get(0).getStuList().size(); j++){

            }

        }





    }
}

