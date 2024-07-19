package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StuVO;

import java.util.List;

public interface StuService {

    //학생 목록 조회
    List<StuVO> getStuList();

    //학생 상세 정보 조회
    StuVO getDetailStu(int stuNum);

    //학생 등록
    void insertStudent(StuVO stuVO);

    //학생 삭제
    void deleteStudent(int stuNum);

    //점수 등록(변경)
    void updateScore(StuVO stuVO);

}
