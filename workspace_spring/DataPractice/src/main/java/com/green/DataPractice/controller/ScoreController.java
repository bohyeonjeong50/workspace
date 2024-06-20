package com.green.DataPractice.controller;

import com.green.DataPractice.vo.ScoreVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ScoreController {

    //시작페이지로 이동
    @GetMapping("/first")
    public String first(){
        return "score_first";
    }

    //첫번째 페이지에 넘어온 데이터 받아, 두번쨰 페이지로 이동
    @PostMapping("/second")
    public String input(ScoreVO scoreVO) { //java데이터를 html 전달, 입력한 데이터 저장하고 자동으로 넘어오게 하는것
        System.out.println(scoreVO);
        return "score_second";
    }

    //세번째 페이지로 이동
    @PostMapping("/c")
    public String third(ScoreVO scoreVO){
        System.out.println(scoreVO);
        return "score_third";
    }

    //네번째 페이지로 이동
    @PostMapping("/d")
    public String fourth(ScoreVO scoreVO, Model model){
        System.out.println(scoreVO);

        //평균
        double avg = (scoreVO.getKorScore() + scoreVO.getEngScore() + scoreVO.getMathScore()) / 3.0;
        model.addAttribute("avg", avg); //위에 model 선언해주고, 자바에서 html로 데이터를 보내고 싶을떄 사용

        return "score_fourth";
    }


}
