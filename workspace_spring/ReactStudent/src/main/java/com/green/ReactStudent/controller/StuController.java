package com.green.ReactStudent.controller;

import com.green.ReactStudent.service.StuService;
import com.green.ReactStudent.vo.StuVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StuController {
    @Resource(name = "studentService")
    private StuService stuService;

    //게시글 목록 조회
    @GetMapping("/getStuList")
    public List<StuVO> getList(){
         return stuService.getStuList();
    }

    //학생 상세 정보 조회
    @GetMapping("/detailStu/{stuNum}")
        public StuVO getDetailStu(@PathVariable("stuNum") int stuNum){
        return stuService.getDetailStu(stuNum);
    }

    //학생 등록
    @PostMapping("/insertStudent")
    public void insertStudent(@RequestBody StuVO stuVO){
        System.out.println(stuVO);
        stuService.insertStudent(stuVO);
    }

    //학생 삭제
    @DeleteMapping("/deleteStudent/{stuNum}")
    public void deleteStudent(@PathVariable("stuNum") int stuNum){
        stuService.deleteStudent(stuNum);
    }



}
