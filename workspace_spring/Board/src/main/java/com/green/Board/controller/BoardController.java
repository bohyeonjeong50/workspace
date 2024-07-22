package com.green.Board.controller;

import com.green.Board.service.BoardService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/board")
public class BoardController {

    @Resource(name = "boardService")
    private BoardService boardService;

    //게시글 목록 조회
    @GetMapping("/list")
    public String getBoardList(){
        return "게시글 목록";
    }

    //게시글 상세 조회


}
