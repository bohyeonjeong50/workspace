package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StuVO;

import java.util.List;

public interface StuService {

    //학생정보조회 페이지
    List<StuVO> getStudentList();
}
