package com.green.BasicBoard.controller;

import com.green.BasicBoard.service.BoardService;
import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReactBoardController {
    @Resource(name = "boardService")
    private BoardService boardService;

    //게시글 목록 페이지
    @RequestMapping("/list") // me> get과 post 둘다 써야할때 이걸 사용
    public List<BoardVO> list(Model model, SearchVO searchVO){


        //목록 조회
        List<BoardVO> boardList = boardService.getBoardList(searchVO);

        return boardList;
    }
}
