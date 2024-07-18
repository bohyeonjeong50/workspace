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

    //게시글 목록 조회
    @Override
    public List<StuVO> getStuList() {
        return sqlSession.selectList("studentMapper.getStuList");
    }

    //학생 상세 정보 조회
    @Override
    public StuVO getDetailStu(int stuNum) {
        return sqlSession.selectOne("studentMapper.getDetailStu", stuNum);
    }
    //me> selectOne 하나만 조회할때

    //학생 등록
    @Override
    public void insertStudent(StuVO stuVO) {
        sqlSession.insert("studentMapper.insertStudent", stuVO);
    }

    //학생 삭제
    @Override
    public void deleteStudent(int stuNum) {
        sqlSession.delete("studentMapper.deleteStudent", stuNum);
    }


}

