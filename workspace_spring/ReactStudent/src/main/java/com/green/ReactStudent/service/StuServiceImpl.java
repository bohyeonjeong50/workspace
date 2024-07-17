package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StuVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("studentService")
public class StuServiceImpl implements StuService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //학생정보조회 페이지
    @Override
    public List<StuVO> getStudentList() {
        List<StuVO> studentList = sqlSession.selectList("studentMapper.getStudentList");
        return studentList;
    }
}
