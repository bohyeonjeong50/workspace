package com.green.ReactStudent.controller;

import com.green.ReactStudent.service.StuService;
import com.green.ReactStudent.vo.StuVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StuController {
    @Resource(name = "studentService")
    private StuService stuService;

    //학생정보조회 페이지
    @GetMapping("/")
    public List<StuVO> getList(){
        List<StuVO> stuVO = stuService.getStudentList();

        return stuVO;
    }



}
