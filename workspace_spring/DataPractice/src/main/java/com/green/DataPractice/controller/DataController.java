package com.green.DataPractice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DataController {

    //localhost:8080/loginForm으로 접속하면 실행!
    @GetMapping("/loginForm")
    public String loginForm(){
        return "login";
    }


}
