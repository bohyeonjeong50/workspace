package com.green.DataPractice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ScoreController {

    @GetMapping("/score")
    public String score(){
        return "score";
    }

    @PostMapping("/b")
    public String input(@RequestParam(name = "name")String name, Model model){
        System.out.println(name);
        model.addAttribute("name", name);
        return "score_input";
    }

    @PostMapping("/c")
    public String show(@RequestParam(name = "name")String name, @RequestParam(name = "age") int age){
        System.out.println();
        return "show";
    }


}
